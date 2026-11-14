/* THE LANDING HANDOFF (ad attribution, 2026-10-22): PLAY NOW goes back to
   the game WITH the query the visitor arrived on — an ad link's ref, set
   (the tile set to equip), utm_* and click ids (gclid / gbraid / wbraid)
   must survive the front-door bounce, or the install loses its source.
   `to` (set by the game's front-door gate in /index.html) is the game base
   the visitor came from: / (default), /trunk/ or /ftue/ (any one-segment
   lowercase path); anything else falls back to /. `from=landing` tells the
   gate this visit has entered (the storage-less fallback). */
(function () {
  'use strict';
  function handoff(search) {
    var q = new URLSearchParams(search || '');
    var to = q.get('to') || '/';
    if (!/^\/([a-z0-9-]{1,24}\/)?$/.test(to)) to = '/';
    q.delete('to');
    q.delete('from');
    q.append('from', 'landing');
    return to + '?' + q.toString();
  }
  window.trumbleHandoff = handoff;
})();
