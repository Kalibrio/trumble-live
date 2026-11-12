// Trumble web app service worker (desktop/mobile install + offline play).
//
// The web build must ALWAYS be the latest trunk (owner rule), so:
//   · pages and every non-fingerprinted file: NETWORK FIRST — the cache is
//     only a fallback when the network is gone;
//   · Vite's fingerprinted files (assets/<name>-<hash>.js|css): CACHE FIRST —
//     their content never changes under the same name.
// Only what the player actually loaded is cached; nothing is precached.
// Scope is the folder this file is served from (/, /trunk/, /ftue/ each get
// their own). Native (Capacitor) builds never register it.
const CACHE = 'trumble-v1';
const HASHED = /\/assets\/[^/]+-[A-Za-z0-9_-]{8,}\.(?:js|css|woff2?)$/;

// Install: keep the page and the code it names (index.html + its own
// fingerprinted scripts/styles), so even the visit that installed the
// worker can come back offline. Fresh from the network, never stale.
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      const shell = new URL('./', self.registration.scope).href;
      const res = await fetch(shell, { cache: 'no-store' });
      if (!res.ok) return;
      const html = await res.clone().text();
      await cache.put(shell, res);
      const refs = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)].map((m) => new URL(m[1], shell).href);
      await Promise.all(refs.filter((u) => u.startsWith(self.location.origin)).map((u) => cache.add(u).catch(() => {})));
    } catch { /* offline install: the fetch handler fills the cache later */ }
  })());
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // API, analytics, art packs: untouched
  if (req.headers.has('range')) return; // audio/video range requests stay native
  if (HASHED.test(url.pathname)) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    })());
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      if (hit) return hit;
      if (req.mode === 'navigate') {
        const shell = await cache.match(new URL('./', self.registration.scope).href);
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
