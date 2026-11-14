// FUNNEL DASHBOARD — the pure aggregation (ad attribution, 2026-10-22).
// No DOM, no network: public/funnel/app.js renders what these return, and
// tests/funnel-dashboard.test.mjs checks them. Input = the server's
// ?a=ftue-cube response (docs/ANALYTICS.md "ftueCube"):
//   cube  = { beats: [beat id], rows: [{ d, p, r, k, lv, v, n, b, e, x }] }
//   spend = [{ d, c, spend, installs }]   (Google Ads rows, account currency)
// Rows are summed after filtering; D1 / D7 are only ever read over the
// ELIGIBLE devices (`e`), so a day that has not elapsed is never a 0 %.

export const MILESTONES = [
  { id: 'install', label: 'Installs' },
  { id: 'first_drop', label: 'First play' },
  { id: 'L1:win', label: 'L1 win' },
  { id: 'L5:win', label: 'L5 win' },
  { id: 'L10:win', label: 'L10 win' },
];

/** Dimensions a row can be filtered / grouped by. */
export const DIMS = ['r', 'k', 'lv', 'v', 'p'];

const DAY_MS = 86400000;
export function addDays(day, n) {
  return new Date(Date.parse(`${day}T00:00:00Z`) + n * DAY_MS).toISOString().slice(0, 10);
}

/** A preset install-date range ending today (inclusive): '7' | '14' | '30'. */
export function presetRange(preset, today) {
  const n = Number(preset);
  if (!Number.isInteger(n) || n < 1) throw new Error(`bad preset ${preset}`);
  return { from: addDays(today, -(n - 1)), to: today };
}

/** Google Ads campaign name -> the source slug it joins on. */
export function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Distinct values per dimension (sorted) and the day span of the cube. */
export function dimValues(cube) {
  const out = { r: new Set(), k: new Set(), lv: new Set(), v: new Set(), p: new Set() };
  let min = '', max = '';
  for (const row of cube.rows) {
    for (const d of DIMS) out[d].add(row[d]);
    if (!min || row.d < min) min = row.d;
    if (!max || row.d > max) max = row.d;
  }
  const sorted = Object.fromEntries(DIMS.map((d) => [d, [...out[d]].sort()]));
  return { ...sorted, from: min, to: max };
}

/** Rows inside the filter. `f` = { from, to, r, k, lv, v, p }: a dimension
 *  that is absent / empty matches everything. */
export function filterRows(rows, f = {}) {
  return rows.filter((row) => {
    if (f.from && row.d < f.from) return false;
    if (f.to && row.d > f.to) return false;
    for (const d of DIMS) {
      const want = f[d];
      if (want && want.length && !want.includes(row[d])) return false;
    }
    return true;
  });
}

/** Sum of rows: installs, devices per beat (aligned with cube.beats),
 *  D1 / D3 / D7 eligible and retained. */
export function sumRows(rows, beatCount) {
  const t = { n: 0, b: new Array(beatCount).fill(0), e: [0, 0, 0], x: [0, 0, 0] };
  for (const row of rows) {
    t.n += row.n;
    for (let i = 0; i < row.b.length && i < beatCount; i++) t.b[i] += row.b[i];
    for (let i = 0; i < 3; i++) { t.e[i] += row.e[i] ?? 0; t.x[i] += row.x[i] ?? 0; }
  }
  return t;
}

const ratio = (a, b) => (b > 0 ? a / b : null);

/** Devices at a milestone ('install' = installs; a beat no build sent = 0). */
export function milestoneCount(cube, t, id) {
  if (id === 'install') return t.n;
  const i = cube.beats.indexOf(id);
  return i >= 0 ? t.b[i] : 0;
}

/** The headline tiles: installs, the milestones as a share of installs,
 *  D1 / D7 over eligible devices. */
export function headline(cube, t) {
  const tiles = MILESTONES.map((m) => {
    const count = milestoneCount(cube, t, m.id);
    return { id: m.id, label: m.label, count, of: t.n, rate: m.id === 'install' ? null : ratio(count, t.n) };
  });
  tiles.push({ id: 'd1', label: 'D1', count: t.x[0], of: t.e[0], rate: ratio(t.x[0], t.e[0]) });
  tiles.push({ id: 'd7', label: 'D7', count: t.x[2], of: t.e[2], rate: ratio(t.x[2], t.e[2]) });
  return tiles;
}

/** The milestone drop-off: each step's devices, share of installs, loss vs
 *  the previous step; `worst` = the index of the step that loses the
 *  largest share of the step before it (-1 when nothing is lost). */
export function dropoff(cube, t) {
  const steps = MILESTONES.map((m) => ({ id: m.id, label: m.label, count: milestoneCount(cube, t, m.id) }));
  let worst = -1, worstShare = 0;
  steps.forEach((s, i) => {
    s.rate = ratio(s.count, t.n);
    const prev = i > 0 ? steps[i - 1].count : null;
    s.lost = prev === null ? 0 : Math.max(0, prev - s.count);
    s.lostShare = prev ? s.lost / prev : null;
    if (s.lostShare !== null && s.lostShare > worstShare) { worstShare = s.lostShare; worst = i; }
  });
  return { steps, worst };
}

/** Spend joined to a source over a date range: rows whose campaign name
 *  slugs to the source. null when no spend row matches. */
export function spendFor(spend, source, f = {}) {
  let sum = 0, hit = false;
  for (const s of spend || []) {
    if (slug(s.c) !== source) continue;
    if (f.from && s.d < f.from) continue;
    if (f.to && s.d > f.to) continue;
    sum += Number(s.spend) || 0; hit = true;
  }
  return hit ? Math.round(sum * 100) / 100 : null;
}

/** One comparison row per campaign / source (`by` = 'r') or collection
 *  ('k'): installs, milestones, D1 / D7 and, per source, spend and cost
 *  per install / first play / L1 win. Sorted by installs, then name. */
export function compare(cube, rows, by, spend, f = {}) {
  const groups = new Map();
  for (const row of rows) {
    const key = row[by];
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  const out = [];
  for (const [key, rs] of groups) {
    const t = sumRows(rs, cube.beats.length);
    const m = Object.fromEntries(MILESTONES.map((x) => [x.id, milestoneCount(cube, t, x.id)]));
    const cost = by === 'r' ? spendFor(spend, key, f) : null;
    out.push({
      key, installs: t.n,
      firstPlay: m.first_drop, l1: m['L1:win'], l5: m['L5:win'], l10: m['L10:win'],
      d1: { count: t.x[0], of: t.e[0], rate: ratio(t.x[0], t.e[0]) },
      d7: { count: t.x[2], of: t.e[2], rate: ratio(t.x[2], t.e[2]) },
      spend: cost,
      cpi: cost === null ? null : ratio(cost, t.n),
      perFirstPlay: cost === null ? null : ratio(cost, m.first_drop),
      perL1: cost === null ? null : ratio(cost, m['L1:win']),
    });
  }
  return out.sort((a, b) => b.installs - a.installs || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
}

/** The full per-beat table, in game order: every beat with its devices and
 *  share of installs; `level` from the beat id (L<n>:...), else ''. */
export function beatTable(cube, t) {
  return cube.beats.map((id, i) => {
    const m = /^L(\d+):/.exec(id);
    return { id, level: m ? Number(m[1]) : '', devices: t.b[i], rate: ratio(t.b[i], t.n) };
  });
}

/** Everything the page shows, from the response and the filter. */
export function view(resp, f = {}, by = 'r') {
  const cube = resp.ftueCube;
  const rows = filterRows(cube.rows, f);
  const t = sumRows(rows, cube.beats.length);
  return {
    rows: rows.length, totals: t,
    headline: headline(cube, t), dropoff: dropoff(cube, t),
    compare: compare(cube, rows, by, resp.spend, f), beats: beatTable(cube, t),
  };
}
