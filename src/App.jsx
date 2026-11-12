import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  clone, clamp, snap, store, solve, tableSig, fp, norm180, norm360, autoQty, tentOrigin, exitsFromLayout, nextExitSpot,
  chandsToList, nextChandelierSpot, clampChandelier, headSeatSpot, headCap, HEAD_CHAIR,
} from './lib/planner.js';
import { wallSideAt } from './lib/shape.js';
import { MAX_SEATS, SEATING } from './lib/constants.js';
import { viewOf, writeBack, migrate, blankTent, placeTent, arrangeTents, tentBox } from './lib/model.js';
import logoUrl from './assets/knights-logo.png';
import Rail from './components/Rail.jsx';
import PdfPreview from './components/PdfPreview.jsx';
import PlanSvg from './components/PlanDrawing.jsx';
import SelInfo from './components/SelInfo.jsx';
import View3D from './components/View3D.jsx';
import { Stats, TitleBlock, RentalList, Notes } from './components/Panels.jsx';
import { geocode, satelliteImage } from './lib/mapbox.js';
// the 3D map (Mapbox GL) is large, so it loads only when the site plan shows it
const SiteMap3D = lazy(() => import('./components/SiteMap3D.jsx'));

function loadInitial() {
  const saved = store('tlp-current');
  // older saves are a single flat tent; migrate() turns either shape into a multi-tent plan
  const model = migrate(saved && (saved.acc || saved.tents) ? saved : null);
  let photo = null;
  if (model.photo) { try { photo = localStorage.getItem('tlp-photo'); } catch { /* ignore */ } if (!photo) model.photo = null; }
  return { model, photo };
}

function savePhoto(src) { try { if (src) localStorage.setItem('tlp-photo', src); else localStorage.removeItem('tlp-photo'); } catch { /* storage full or blocked */ } }

export default function App() {
  const [init] = useState(loadInitial);
  const [model, setModel] = useState(init.model);
  const [photoSrc, setPhotoSrc] = useState(init.photo);
  const [view, setViewState] = useState('tent');
  const [sel, setSel] = useState(null);
  const [calib, setCalib] = useState(null);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);
  const drag = useRef(null);

  const ph = !!(model.photo && photoSrc);
  // site plan as a live 3D map: only for a Mapbox photo, which knows where on earth it is
  const [siteMode, setSiteMode] = useState('3d');
  const hasMap = ph && model.photo.source === 'mapbox' && Number.isFinite(model.photo.lat) && Number.isFinite(model.photo.lng);
  const show3dMap = view === 'site' && hasMap && siteMode === '3d' && !calib;
  const active = model.active;
  // one merged "view" (site + tent settings) and one solved layout per tent
  const views = useMemo(() => model.tents.map((_, i) => viewOf(model, i)), [model]);
  const lays = useMemo(() => views.map((v) => solve(v)), [views]);
  const tentList = useMemo(() => views.map((v, i) => ({ st: v, lay: lays[i] })), [views, lays]);
  const st = views[active], lay = lays[active];

  useEffect(() => { store('tlp-current', model); }, [model]);

  /** Edit the active tent: fn gets a merged site + tent copy; changes are written back to the plan. */
  const update = useCallback((fn) => setModel((m) => { const n = clone(m); const v = viewOf(n, n.active); fn(v); writeBack(n, n.active, v); return n; }), []);
  /** Edit the plan as a whole (site settings, the tent list, several tents at once). */
  const updateModel = useCallback((fn) => setModel((m) => { const n = clone(m); fn(n); return n; }), []);

  const setView = (v) => { setViewState(v); setSel(null); if (v !== 'site') setCalib(null); };

  // --- tents ---
  const pickTent = (i) => { if (i === active) return; updateModel((n) => { n.active = i; }); setSel(null); };
  const activeCentre = () => { const b = tentBox(st, lay, ph); return { x: b.cx, y: b.cy }; };
  const addTent = (base) => {
    const prefer = activeCentre();
    updateModel((n) => {
      const t = base ? { ...clone(n.tents[n.active]), name: `${n.tents[n.active].name} (copy)` } : blankTent(n.tents.length + 1);
      n.tents.push(t); n.active = n.tents.length - 1; placeTent(n, n.active, ph, prefer);
    });
    setSel(null);
  };
  const removeTent = (i) => {
    updateModel((n) => { if (n.tents.length < 2) return; n.tents.splice(i, 1); n.active = clamp(n.active > i ? n.active - 1 : n.active, 0, n.tents.length - 1); });
    setSel(null);
  };
  const arrangeAll = () => updateModel((n) => arrangeTents(n, ph));

  // --- helpers that mutate a state copy `n` using the current layout ---
  const tkey = `${lay.W}x${lay.L}`;
  const lockSize = (n) => { if (n.tentSize === 'auto') n.tentSize = tkey; };
  const freezeTables = (n) => {
    // a hand-set table list already holds every table (with its chairs); keep it as is
    if (n.tables && n.tables.manual && n.tables.t === tkey && n.tables.s === tableSig(n)) return;
    lockSize(n); const s = tableSig(n);
    const old = n.tables && n.tables.t === tkey && n.tables.s === s ? n.tables.pts : [];
    n.tables = { t: tkey, s, pts: [...lay.units.map((u) => ({ x: u.x, y: u.y, rot: u.rot || 0, type: u.type })), ...old.slice(lay.units.length)] };
  };
  // exits: the first manual change turns the automatic set into an editable list
  const editExits = (fn) => update((n) => { if (!n.exits) n.exits = exitsFromLayout(lay); fn(n.exits, n); });
  const exitIdx = sel && sel.startsWith('x:') ? +sel.slice(2) : -1;
  const removeExit = (i) => { editExits((x) => { x.splice(i, 1); }); setSel(null); };
  // chandeliers: same idea — the first manual change turns the automatic set into an editable list
  const editChands = (fn) => update((n) => { if (!n.chandList) n.chandList = chandsToList(lay); fn(n.chandList, n); });
  const chandIdx = sel && sel.startsWith('c:') ? +sel.slice(2) : -1;
  const removeChand = (i) => { editChands((c) => { c.splice(i, 1); }); setSel(null); };
  const moveChand = (i, x, y) => {
    const p = clampChandelier(lay.sh, x, y);
    editChands((c) => { if (c[i]) c[i] = { fx: p.x / lay.L, fy: p.y / lay.W }; });
  };
  const selectFromRail = (k) => { if (k && view !== 'tent') { setViewState('tent'); setCalib(null); } setSel(k); };
  // tables & chairs by hand: the first add/remove/chair change fixes the table list as the user's own
  const makeManual = (n) => {
    if (n.tables && n.tables.manual && n.tables.t === tkey && n.tables.s === tableSig(n)) return;
    lockSize(n);
    n.tables = { t: tkey, s: tableSig(n), manual: true, pts: lay.units.map((u) => ({ x: u.x, y: u.y, rot: u.rot || 0, type: u.type, seats: u.seats })) };
  };
  const unitIdx = sel && sel.startsWith('u:') ? +sel.slice(2) : -1;
  // type: which table to add (mixed layouts offer round or banquet); defaults to the main table type
  const addTable = (t) => {
    const type = typeof t === 'string' ? t : lay.base;
    if (lay.S.kind === 'none' || !SEATING[type]) return;
    const spot = (lay.freeSpots[type] || [])[0] || { x: lay.L / 2, y: lay.W / 2 }; // no open floor: centre, outlined red
    const seats = lay.S.kind === 'chair' ? 1 : type === lay.base ? lay.per : SEATING[type].def;
    update((n) => { makeManual(n); n.tables.pts.push({ x: spot.x, y: spot.y, rot: 0, type, seats }); });
    if (view !== 'tent') { setViewState('tent'); setCalib(null); }
    setSel('u:' + lay.units.length);
  };
  const removeTable = (i) => { if (!lay.units[i]) return; update((n) => { makeManual(n); n.tables.pts.splice(i, 1); }); setSel(null); };
  const setSeats = (i, k) => {
    if (!lay.units[i]) return; const max = MAX_SEATS[lay.units[i].type] || 12; if (k < 0 || k > max) return;
    update((n) => { makeManual(n); n.tables.pts[i].seats = k; });
  };
  // switch one table between round and banquet; its chairs carry over up to what the new table holds
  const setTableType = (i, t) => {
    const u = lay.units[i]; if (!u || !MAX_SEATS[t] || u.type === t) return;
    update((n) => { makeManual(n); n.tables.pts[i] = { ...n.tables.pts[i], type: t, seats: Math.min(u.seats, MAX_SEATS[t]) }; });
  };
  // back to automatic tables; also free the tent size again unless floor items were placed by hand
  const resetTables = () => { update((n) => { n.tables = null; if (!Object.keys(n.pos).length) n.tentSize = 'auto'; }); setSel(null); };
  // head table chairs: the first move/remove/add turns the evenly spaced set into the user's own list (acc.head.chairs)
  const headItem = lay.items.find((i) => i.def.id === 'head');
  const headIdx = sel && sel.startsWith('h:') ? +sel.slice(2) : -1;
  const editHeadChairs = (fn) => {
    if (!headItem) return;
    update((n) => { const h = n.acc.head; if (!Array.isArray(h.chairs)) h.chairs = headItem.chairs.map((c) => ({ x: c.x, y: c.y })); fn(h.chairs); });
  };
  const moveHeadChair = (i, x, y) => {
    const [w, h] = headItem.dims;
    editHeadChairs((c) => { if (c[i]) c[i] = { x: clamp(x, HEAD_CHAIR, w - HEAD_CHAIR), y: clamp(y, HEAD_CHAIR, h - HEAD_CHAIR) }; });
  };
  const removeHeadChair = (i) => { editHeadChairs((c) => { c.splice(i, 1); }); setSel(headItem ? 'head' : null); };
  const addHeadChair = () => {
    if (!headItem || headItem.chairs.length >= headCap(headItem.dims[0])) return;
    const spot = headSeatSpot(headItem);
    editHeadChairs((c) => { c.push(spot); });
    setSel('h:' + headItem.chairs.length);
  };
  const resetHeadChairs = () => { update((n) => { delete n.acc.head.chairs; }); if (sel && sel.startsWith('h:')) setSel('head'); };
  // pointer movement in tent feet -> the head table's own (unrotated) frame
  const toHeadFrame = (dx, dy) => { const a = (headItem ? headItem.rot : 0) * Math.PI / 180, c = Math.cos(a), si = Math.sin(a); return [dx * c + dy * si, -dx * si + dy * c]; };
  const moveUnit = (n, i, x, y) => { const { hx, hy } = SEATING[lay.units[i].type] || lay.S; n.tables.pts[i] = { ...n.tables.pts[i], x: clamp(x, hx, lay.L - hx), y: clamp(y, hy, lay.W - hy) }; };

  // --- drawing interaction ---
  const svgPt = (e) => { const svg = svgRef.current, p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };

  const onPointerDown = (e) => {
    const svg = svgRef.current;
    // items call preventDefault (no text selection while dragging), which also stops the click focusing the drawing;
    // focus it here so arrow keys, R and Delete act on what was just picked
    const wrap = svg.closest('.svgwrap'); if (wrap && document.activeElement !== wrap) wrap.focus({ preventScroll: true });
    if (calib && view === 'site') {
      const p = svgPt(e), pt = { x: p.x, y: p.y };
      setCalib((c) => ({ pts: c.pts.length >= 2 ? [pt] : [...c.pts, pt] }));
      return;
    }
    const cg = e.target.closest('[data-chand]');
    if (cg) {
      const i = +cg.dataset.chand, c = lay.chands[i]; if (!c) return; const p = svgPt(e);
      drag.current = { chand: i, ox: c.x, oy: c.y, px: p.x, py: p.y, moved: false };
      setSel('c:' + i); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault(); return;
    }
    const xg = e.target.closest('[data-exit]');
    if (xg) {
      const i = +xg.dataset.exit; if (!lay.exits[i]) return; const p = svgPt(e);
      drag.current = { exit: i, px: p.x, py: p.y, moved: false };
      setSel('x:' + i); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault(); return;
    }
    const u = e.target.closest('[data-unit]');
    if (u) {
      const i = +u.dataset.unit, un = lay.units[i]; if (!un) return; const p = svgPt(e);
      drag.current = { unit: i, ox: un.x, oy: un.y, px: p.x, py: p.y, moved: false };
      setSel('u:' + i); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault(); return;
    }
    const hs = e.target.closest('[data-hseat]');
    if (hs && headItem) {
      const i = +hs.dataset.hseat, c = headItem.chairs[i]; if (!c) return; const p = svgPt(e);
      drag.current = { hseat: i, ox: c.x, oy: c.y, px: p.x, py: p.y, moved: false };
      setSel('h:' + i); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault(); return;
    }
    const g = e.target.closest('[data-key]');
    if (!g) { setSel(null); return; }
    const key = g.dataset.key, p = svgPt(e);
    if (key.startsWith('__tent')) {
      // site plan: clicking a tent makes it the active tent, then drags it
      const i = +(key.split(':')[1] || active), o = tentOrigin(views[i], lays[i], ph);
      if (i !== active) updateModel((n) => { n.active = i; });
      drag.current = { key: '__tent', ox: o.x, oy: o.y, px: p.x, py: p.y, moved: false };
      setSel('__tent'); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault(); return;
    }
    const it = lay.items.find((i) => i.key === key); if (!it) return;
    drag.current = { key, ox: it.x, oy: it.y, px: p.x, py: p.y, moved: false };
    setSel(key); svg.setPointerCapture(e.pointerId); setDragging(true); e.preventDefault();
  };

  const onPointerMove = (e) => {
    const d = drag.current; if (!d) return;
    const p = svgPt(e), dx = p.x - d.px, dy = p.y - d.py;
    if (!d.moved && Math.hypot(dx, dy) < 0.4) return;
    if (d.chand != null) { d.moved = true; moveChand(d.chand, snap(d.ox + dx), snap(d.oy + dy)); return; }
    if (d.hseat != null) { d.moved = true; const [lx, ly] = toHeadFrame(dx, dy); moveHeadChair(d.hseat, snap(d.ox + lx), snap(d.oy + ly)); return; }
    if (d.exit != null) {
      // slide the opening to whichever wall the pointer is nearest
      d.moved = true; const { side, f } = wallSideAt(lay.sh, p.x, p.y);
      editExits((x) => { if (x[d.exit]) x[d.exit] = { ...x[d.exit], side, f }; });
      return;
    }
    if (d.unit != null) {
      const first = !d.moved; d.moved = true;
      update((n) => { if (first || !n.tables) freezeTables(n); moveUnit(n, d.unit, snap(d.ox + dx), snap(d.oy + dy)); });
      return;
    }
    d.moved = true;
    if (d.key === '__tent') { update((n) => { n.tentPos = { x: snap(d.ox + dx), y: snap(d.oy + dy) }; }); return; }
    const it = lay.items.find((i) => i.key === d.key); if (!it) return;
    update((n) => {
      lockSize(n);
      n.pos[d.key] = { x: clamp(snap(d.ox + dx), 0, lay.L - it.w), y: clamp(snap(d.oy + dy), 0, lay.W - it.h), rot: it.rot, t: tkey };
    });
  };

  const endDrag = () => { if (!drag.current) return; drag.current = null; setDragging(false); };

  // --- selection actions ---
  const curAngle = () => {
    if (sel === '__tent') return st.tentAngle || 0;
    if (sel && sel.startsWith('u:')) { const u = lay.units[+sel.slice(2)]; return u ? u.rot || 0 : 0; }
    const it = lay.items.find((i) => i.key === sel); return it ? it.rot : 0;
  };
  const setAngle = (a) => {
    if (!sel || !Number.isFinite(a)) return;
    if (sel === '__tent') { update((n) => { n.tentAngle = norm180(a); }); return; }
    if (sel.startsWith('u:')) {
      const i = +sel.slice(2); if (!lay.units[i]) return;
      update((n) => { freezeTables(n); n.tables.pts[i] = { ...n.tables.pts[i], rot: norm360(a) }; }); return;
    }
    const it = lay.items.find((i) => i.key === sel); if (!it) return;
    const rot = norm360(a), [w, h] = fp(it.dims, rot), cx = it.x + it.w / 2, cy = it.y + it.h / 2;
    update((n) => {
      lockSize(n);
      n.pos[sel] = { x: clamp(snap(cx - w / 2), 0, Math.max(0, lay.L - w)), y: clamp(snap(cy - h / 2), 0, Math.max(0, lay.W - h)), rot, t: tkey };
    });
  };
  const rotateBy = (d) => setAngle(curAngle() + d);
  const removeSel = () => {
    const it = lay.items.find((i) => i.key === sel); if (!it) return; const a = it.def;
    update((n) => {
      const s = n.acc[a.id];
      if (a.qty) {
        const c = s.qty === 'auto' ? autoQty(a.id, n.guests) : +s.qty;
        if (c <= 1) { s.on = false; Object.keys(n.pos).filter((k) => k.startsWith(a.id + '-')).forEach((k) => delete n.pos[k]); return; }
        s.qty = String(c - 1);
        // the others stay exactly where they are now: pin each one, renumbered to close the gap
        lockSize(n);
        const rest = lay.items.filter((i) => i.def.id === a.id && i.key !== sel);
        Object.keys(n.pos).filter((k) => k.startsWith(a.id + '-')).forEach((k) => delete n.pos[k]);
        rest.forEach((i, k) => { n.pos[a.id + '-' + k] = { x: i.x, y: i.y, rot: i.rot, t: tkey }; });
      } else { s.on = false; delete n.pos[a.id]; }
    });
    setSel(null);
  };
  const nudge = (dx, dy) => {
    const it = lay.items.find((i) => i.key === sel); if (!it) return;
    update((n) => { lockSize(n); n.pos[sel] = { x: clamp(it.x + dx, 0, lay.L - it.w), y: clamp(it.y + dy, 0, lay.W - it.h), rot: it.rot, t: tkey }; });
  };

  const onKeyDown = (e) => {
    if (!sel || e.target.tagName === 'INPUT') return;
    const m = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (e.key === 'r' || e.key === 'R') { e.preventDefault(); rotateBy(e.shiftKey ? 15 : 90); return; }
    if (sel === '__tent') {
      if (m && view === 'site') { e.preventDefault(); const o = tentOrigin(st, lay, ph); update((n) => { n.tentPos = { x: o.x + m[0], y: o.y + m[1] }; }); }
      return;
    }
    if (view !== 'tent') return;
    if (chandIdx >= 0) {
      const c = lay.chands[chandIdx]; if (!c) return;
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeChand(chandIdx); return; }
      if (m) { e.preventDefault(); moveChand(chandIdx, c.x + m[0], c.y + m[1]); }
      return;
    }
    if (exitIdx >= 0) {
      const ex = lay.exits[exitIdx]; if (!ex) return;
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeExit(exitIdx); return; }
      if (!m) return; e.preventDefault();
      // arrows move the opening 1' along its wall
      const hz = ex.side === 'top' || ex.side === 'bottom', step = hz ? m[0] / lay.L : m[1] / lay.W;
      if (step) editExits((x) => { x[exitIdx] = { ...x[exitIdx], f: clamp(ex.c / (hz ? lay.L : lay.W) + step, 0, 1) }; });
      return;
    }
    if (headIdx >= 0) {
      const c = headItem && headItem.chairs[headIdx]; if (!c) return;
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeHeadChair(headIdx); return; }
      if (e.key === '+' || e.key === '=') { e.preventDefault(); addHeadChair(); return; }
      if (!m) return; e.preventDefault();
      const [lx, ly] = toHeadFrame(m[0] * 0.5, m[1] * 0.5); moveHeadChair(headIdx, c.x + lx, c.y + ly); return;
    }
    if (sel.startsWith('u:')) {
      const i = +sel.slice(2), u = lay.units[i]; if (!u) return;
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeTable(i); return; }
      if (e.key === '+' || e.key === '=') { e.preventDefault(); setSeats(i, u.seats + 1); return; }
      if (e.key === '-' || e.key === '_') { e.preventDefault(); setSeats(i, u.seats - 1); return; }
      if (!m) return; e.preventDefault();
      update((n) => { freezeTables(n); moveUnit(n, i, u.x + m[0], u.y + m[1]); }); return;
    }
    if (m) { e.preventDefault(); nudge(...m); }
    else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeSel(); }
  };

  const autoArrange = () => {
    if (view === 'site') {
      // site plan: re-pack every tent on the site
      if (model.tents.length > 1) arrangeAll(); else update((n) => { n.tentPos = null; });
    } else update((n) => { n.pos = {}; n.tables = null; n.tentSize = 'auto'; });
    setSel(null);
  };

  // --- satellite photo ---
  /** Put a new site photo in place. photo: { pw, ph, fpp, calibrated, source?, ... } */
  const applyPhoto = useCallback((src, photo) => {
    setPhotoSrc(src); savePhoto(src);
    setModel((s) => {
      const n = clone(s); n.photo = photo;
      for (const t of n.tents) t.tentAngle = 0;
      arrangeTents(n, true); // new photo = new coordinates; lay the tents out again over it
      return n;
    });
    setCalib(photo.calibrated ? null : { pts: [] }); setViewState('site'); setSel(null);
  }, []);
  const loadPhoto = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const rd = new FileReader();
    rd.onload = () => {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, 2000 / Math.max(img.width, img.height)), c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        applyPhoto(c.toDataURL('image/jpeg', 0.85), { pw: c.width, ph: c.height, fpp: Math.max(model.siteL, 60) / c.width, calibrated: false, source: 'upload' });
      };
      img.src = rd.result;
    };
    rd.readAsDataURL(file);
  }, [applyPhoto, model.siteL]);
  /** Find the address with Mapbox and load a satellite image about widthFt across; the scale comes with it. */
  const loadSatellite = async (address, widthFt) => {
    const at = await geocode(address);
    const img = await satelliteImage(at.lat, at.lng, widthFt);
    applyPhoto(img.src, { pw: img.pw, ph: img.ph, fpp: img.fpp, calibrated: true, source: 'mapbox', lat: at.lat, lng: at.lng, zoom: img.zoom });
    return at;
  };

  useEffect(() => {
    const onPaste = (e) => {
      const f = [...((e.clipboardData && e.clipboardData.files) || [])].find((x) => x.type.startsWith('image/'));
      if (f) { e.preventDefault(); loadPhoto(f); }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [loadPhoto]);

  const startCalib = () => { if (!ph) return; setView('site'); setCalib({ pts: [] }); };
  const removePhoto = () => {
    updateModel((n) => { n.photo = null; for (const t of n.tents) t.tentAngle = 0; arrangeTents(n, false); });
    setCalib(null); setPhotoSrc(null); savePhoto(null);
  };
  /** Rescale the photo by factor f; every tent keeps its spot on the ground. */
  const scalePhoto = (f) => {
    if (!(f > 0) || !Number.isFinite(f)) return;
    updateModel((n) => {
      n.photo.fpp *= f; n.photo.calibrated = true;
      for (const t of n.tents) if (t.tentPos) t.tentPos = { x: t.tentPos.x * f, y: t.tentPos.y * f };
    });
  };
  const applyCalib = (real) => {
    const p = calib && calib.pts; if (!(real > 0) || !p || p.length < 2) return;
    const d = Math.hypot(p[1].x - p[0].x, p[1].y - p[0].y); if (d < 0.01) return;
    scalePhoto(real / d);
    setCalib(null);
  };

  // client PDF: the library loads only when first used
  const [pdfState, setPdfState] = useState('idle'); // idle | busy | error
  const [pdfDoc, setPdfDoc] = useState(null); // { blob, filename } shown in the preview
  const downloadPdf = async () => {
    if (pdfState === 'busy') return;
    setPdfState('busy');
    try {
      const { makeClientPdf } = await import('./lib/pdf.js');
      setPdfDoc(await makeClientPdf({ model, tents: tentList, active, ph, photoSrc }));
      setPdfState('idle');
    } catch (err) {
      console.error(err); setPdfState('error'); setTimeout(() => setPdfState('idle'), 4000);
    }
  };

  const loadLayout = (s) => {
    const n = migrate(s), src = n.photo && s.photoSrc ? s.photoSrc : null;
    if (!src) n.photo = null;
    setModel(n); setPhotoSrc(src); savePhoto(src); setCalib(null); setSel(null);
  };
  /** Start a blank plan (default site, one default tent, no photo). Saved layouts are untouched. */
  const newLayout = () => {
    setModel(migrate(null)); setPhotoSrc(null); savePhoto(null); setCalib(null); setSel(null); setViewState('tent');
  };

  return (<>
    <header className="top">
      <img className="logo" src={logoUrl} alt="Knights Tent & Party Rental" />
      <div>
        <h1>Tent Layout Planner</h1>
        <p>Set the site, guest count and extras. The tent size, plan and rental list update as you go. Drag any floor item to move it.</p>
      </div>
      <button className="btn primary pdfbtn" onClick={downloadPdf} disabled={pdfState === 'busy'} aria-live="polite"
        title="Download a client-ready PDF: overview, 3D preview, floor plans and rental summary">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        {pdfState === 'busy' ? 'Preparing PDF…' : pdfState === 'error' ? 'PDF failed, try again' : 'Download PDF'}
      </button>
    </header>
    {pdfDoc && <PdfPreview doc={pdfDoc} onClose={() => setPdfDoc(null)} />}

    <div className="app">
      <Rail st={st} lay={lay} model={model} active={active}
        tents={tentList.map((t) => ({ name: t.st.name, guests: t.st.guests, lay: t.lay }))}
        sel={sel} onSelect={selectFromRail} update={update} ph={ph} photoSrc={photoSrc}
        onPhotoFile={loadPhoto} onSatellite={loadSatellite} onCalib={startCalib} onPhotoDel={removePhoto} onPhotoScale={scalePhoto} onLoadLayout={loadLayout} onNewLayout={newLayout}
        onPickTent={pickTent} onAddTent={() => addTent(false)} onDuplicateTent={() => addTent(true)} onRemoveTent={removeTent} onArrange={arrangeAll}
        onAddTable={addTable} onResetTables={resetTables} />

      <main className="sheet">
        <Stats st={st} lay={lay} count={model.tents.length} />

        <section className="card">
          <div className="tenttabs" role="group" aria-label="Tents">
            {model.tents.map((t, i) => (
              <button key={i} className="tab" aria-pressed={i === active} onClick={() => pickTent(i)}>{t.name}</button>
            ))}
            <button className="btn sm" onClick={() => addTent(false)}>+ Add tent</button>
          </div>
          <div className="toolbar">
            <div className="seg" role="group" aria-label="Drawing view">
              <button aria-pressed={view === 'tent'} onClick={() => setView('tent')}>Tent plan</button>
              <button aria-pressed={view === 'site'} onClick={() => setView('site')}>Site plan</button>
            </div>
            {view === 'site' && hasMap && (
              <div className="seg" role="group" aria-label="Site plan style">
                <button aria-pressed={siteMode === '3d'} onClick={() => setSiteMode('3d')}>3D map</button>
                <button aria-pressed={siteMode === '2d'} onClick={() => setSiteMode('2d')}>2D plan</button>
              </div>
            )}
            <button className="btn" onClick={autoArrange}>Auto-arrange</button>
            <SelInfo view={view} calib={calib} sel={sel} lay={lay} st={st}
              onCancelCalib={() => setCalib(null)} onApplyCalib={applyCalib}
              onRotate={rotateBy} onSetAngle={setAngle} onRemove={removeSel}
              onReflow={() => { update((n) => { n.tables = null; }); setSel(null); }}
              onExitKind={(k) => editExits((x) => { if (x[exitIdx]) x[exitIdx] = { ...x[exitIdx], kind: k }; })}
              onRemoveExit={() => removeExit(exitIdx)}
              onAddExit={() => { editExits((x) => { x.push(nextExitSpot(x)); }); }}
              onRemoveChand={() => removeChand(chandIdx)}
              onAddChand={() => editChands((c) => { c.push(nextChandelierSpot(lay)); })}
              onSeats={(k) => setSeats(unitIdx, k)} onTableType={(t) => setTableType(unitIdx, t)} onAddTable={addTable} onRemoveTable={() => removeTable(unitIdx)}
              onAddHeadSeat={addHeadChair} onRemoveHeadSeat={() => removeHeadChair(headIdx)} onResetHeadSeats={resetHeadChairs} />
          </div>
          <div className="svgwrap" tabIndex={0} onKeyDown={onKeyDown}
            aria-label="Layout drawing. Select an item, then use arrow keys to nudge, R to rotate, Delete to remove."
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { const f = e.dataTransfer && e.dataTransfer.files[0]; if (f && f.type.startsWith('image/')) { e.preventDefault(); loadPhoto(f); } }}>
            {show3dMap ? (
              <Suspense fallback={<p className="hint map3dload">Loading 3D map…</p>}>
                <SiteMap3D tents={tentList} active={active} sel={sel} photo={model.photo} photoSrc={photoSrc}
                  onPickTent={(i) => { if (i !== active) updateModel((n) => { n.active = i; }); setSel('__tent'); }}
                  onMoveTent={(i, x, y) => updateModel((n) => { if (n.tents[i]) n.tents[i].tentPos = { x: snap(x), y: snap(y) }; })}
                  onDeselect={() => setSel(null)} />
              </Suspense>
            ) : (
              <PlanSvg st={st} lay={lay} tents={tentList} active={active} view={view} sel={sel} calib={view === 'site' ? calib : null} ph={ph} photoSrc={photoSrc}
                svgRef={svgRef} dragging={dragging}
                onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerCancel={endDrag} />
            )}
          </div>
          <TitleBlock st={st} lay={lay} view={view} tents={tentList} />
        </section>

        <View3D tents={tentList} active={active} photoSrc={ph ? photoSrc : null} />

        <div className="two">
          <RentalList tents={tentList} />
          <Notes st={st} lay={lay} ph={ph} tents={tentList} />
        </div>
      </main>
    </div>
  </>);
}
