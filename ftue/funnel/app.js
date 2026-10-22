// FUNNEL DASHBOARD — the page (trumble.kalibrio.com/funnel/). Reads the
// viewer-key endpoint ?a=ftue-cube on tristris-api only; every number comes
// from funnel.js (pure, tested). The key lives in this browser's
// localStorage; "Forget key" removes it.
import { DIMS, dimValues, presetRange, view } from './funnel.js';

const API = 'https://tristris-api.kalibrio.com/?a=ftue-cube&key=';
const KEY = 'trumble.funnel.key';
const $ = (id) => document.getElementById(id);
const store = {
  get() { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } },
  set(v) { try { localStorage.setItem(KEY, v); } catch { /* private mode: ask again next time */ } },
  del() { try { localStorage.removeItem(KEY); } catch { /* ignore */ } },
};
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pct = (r) => (r === null || r === undefined ? '–' : `${(r * 100).toFixed(1)}%`);
const num = (n) => (n === null || n === undefined ? '–' : Number(n).toLocaleString('en-US'));
const money = (n) => (n === null || n === undefined ? '–' : Number(n).toFixed(2));
const LABEL = { r: 'Campaign / source', k: 'Collection', lv: 'Level version', v: 'Build', p: 'Platform' };

let resp = null;
let by = 'r';
const today = new Date().toISOString().slice(0, 10);
let filter = { ...presetRange('14', today) };

function status(text, isErr = false) {
  const s = $('status');
  s.hidden = !text;
  s.textContent = text || '';
  s.classList.toggle('err', isErr);
}

function askKey(err = '') {
  $('app').hidden = true;
  $('gate').hidden = false;
  $('forget').hidden = true;
  $('gateerr').textContent = err;
  $('key').focus();
}

async function load(key) {
  status('Loading…');
  let r;
  try {
    r = await fetch(API + encodeURIComponent(key), { cache: 'no-store' });
  } catch {
    status('Network error: the API did not answer.', true);
    return;
  }
  if (r.status === 403) { store.del(); status(''); askKey('That key was refused.'); return; }
  const body = await r.json().catch(() => null);
  if (!r.ok || !body || !body.ok || !body.ftueCube) { status(`The API answered ${r.status}.`, true); return; }
  store.set(key);
  resp = body;
  status('');
  $('gate').hidden = true;
  $('app').hidden = false;
  $('forget').hidden = false;
  $('meta').textContent = `Data generated ${body.generated} · ${body.ftueCube.rows.length} cells.`;
  buildFilters();
  render();
}

function buildFilters() {
  const dv = dimValues(resp.ftueCube);
  const f = $('filters');
  const multi = (d) => `<div><label for="f-${d}">${LABEL[d]}</label><select id="f-${d}" multiple>${
    dv[d].map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join('')}</select></div>`;
  f.innerHTML = `<div><label>Install date</label>
      <div class="row"><button type="button" data-p="7">7 d</button><button type="button" data-p="14" class="on">14 d</button><button type="button" data-p="30">30 d</button></div>
      <div class="row" style="margin-top:6px"><input type="date" id="f-from" value="${filter.from}"><input type="date" id="f-to" value="${filter.to}"></div>
      <div class="sub" style="margin:4px 0 0">Data: ${dv.from || '–'} to ${dv.to || '–'} (UTC)</div></div>
    ${DIMS.map(multi).join('')}`;
  f.querySelectorAll('button[data-p]').forEach((b) => b.addEventListener('click', () => {
    f.querySelectorAll('button[data-p]').forEach((x) => x.classList.toggle('on', x === b));
    Object.assign(filter, presetRange(b.dataset.p, today));
    $('f-from').value = filter.from; $('f-to').value = filter.to;
    render();
  }));
  for (const id of ['f-from', 'f-to']) $(id).addEventListener('change', () => {
    filter.from = $('f-from').value; filter.to = $('f-to').value;
    f.querySelectorAll('button[data-p]').forEach((x) => x.classList.remove('on'));
    render();
  });
  for (const d of DIMS) $(`f-${d}`).addEventListener('change', (e) => {
    filter[d] = [...e.target.selectedOptions].map((o) => o.value);
    render();
  });
}

function render() {
  const v = view(resp, filter, by);
  $('tiles').innerHTML = v.headline.map((t) => `<div class="tile"><div class="k">${esc(t.label)}</div>
    <div class="v">${t.id === 'install' ? num(t.count) : pct(t.rate)}</div>
    <div class="c">${t.id === 'install' ? `${v.rows} cells` : `${num(t.count)} / ${num(t.of)}${t.id.startsWith('d') ? ' eligible' : ''}`}</div></div>`).join('');
  const top = Math.max(1, v.dropoff.steps[0].count);
  $('funnel').innerHTML = v.dropoff.steps.map((s, i) => `<div class="step${i === v.dropoff.worst ? ' worst' : ''}">
      <div><strong>${esc(s.label)}</strong></div>
      <div class="bar" title="${num(s.count)}"><i style="width:${(100 * s.count / top).toFixed(1)}%"></i></div>
      <div class="loss">${num(s.count)} · ${i === 0 ? 'all' : pct(s.rate)}${i > 0 ? `<br>−${num(s.lost)} (${pct(s.lostShare)})` : ''}</div></div>`).join('')
    + (v.dropoff.worst > 0 ? `<p class="sub" style="margin:8px 4px 0">Biggest loss: ${esc(v.dropoff.steps[v.dropoff.worst - 1].label)} → ${esc(v.dropoff.steps[v.dropoff.worst].label)}.</p>` : '');
  const cost = by === 'r' && v.compare.some((r) => r.spend !== null);
  $('compare').innerHTML = `<thead><tr><th>${by === 'r' ? 'Campaign / source' : 'Collection'}</th><th>Installs</th><th>First play</th><th>L1</th><th>L5</th><th>L10</th><th>D1</th><th>D7</th>${
    cost ? '<th>Spend</th><th>CPI</th><th>/ first play</th><th>/ L1 win</th>' : ''}</tr></thead><tbody>${
    v.compare.map((r) => {
      const c = (n) => `${num(n)} <small>${pct(r.installs ? n / r.installs : null)}</small>`;
      return `<tr><td>${esc(r.key)}</td><td>${num(r.installs)}</td><td>${c(r.firstPlay)}</td><td>${c(r.l1)}</td><td>${c(r.l5)}</td><td>${c(r.l10)}</td>
        <td>${pct(r.d1.rate)} <small>${num(r.d1.count)}/${num(r.d1.of)}</small></td><td>${pct(r.d7.rate)} <small>${num(r.d7.count)}/${num(r.d7.of)}</small></td>${
        cost ? `<td>${money(r.spend)}</td><td>${money(r.cpi)}</td><td>${money(r.perFirstPlay)}</td><td>${money(r.perL1)}</td>` : ''}</tr>`;
    }).join('') || '<tr><td colspan="8">No installs in this filter.</td></tr>'}</tbody>`;
  $('beats').innerHTML = `<thead><tr><th>Step</th><th>Level</th><th>Devices</th><th>Of installs</th></tr></thead><tbody>${
    v.beats.map((b) => `<tr><td>${esc(b.id)}</td><td>${b.level}</td><td>${num(b.devices)}</td><td>${pct(b.rate)}</td></tr>`).join('')}</tbody>`;
}

$('byr').addEventListener('click', () => { by = 'r'; $('byr').classList.add('on'); $('byk').classList.remove('on'); render(); });
$('byk').addEventListener('click', () => { by = 'k'; $('byk').classList.add('on'); $('byr').classList.remove('on'); render(); });
$('keyform').addEventListener('submit', (e) => { e.preventDefault(); const k = $('key').value.trim(); if (k) void load(k); });
$('forget').addEventListener('click', (e) => { e.preventDefault(); store.del(); resp = null; askKey(); });

const saved = store.get();
if (saved) void load(saved); else askKey();
