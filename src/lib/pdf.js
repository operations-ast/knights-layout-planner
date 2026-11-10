// Client-facing PDF proposal (US Letter, landscape):
//   1. Overview: event, at-a-glance facts, what's included, 3D preview
//   2. A floor plan page per tent
//   3. Site plan (several tents, or a satellite photo)
//   4. Rental summary
// The plans are the app's own SVG drawing, re-coloured for paper and rasterised at print resolution.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { jsPDF } from 'jspdf';
import PlanSvg from '../components/PlanDrawing.jsx';
import Scene3D from '../three/Scene3D.js';
import { allRentals } from './reports.js';
import { SEATING, SITES, LIGHT_STYLES } from './constants.js';
import { danceFinish } from './planner.js';
import logoUrl from '../assets/knights-logo.png';

const PW = 792, PH = 612, M = 40, CW = PW - 2 * M; // page and content width in points
// dark presentation, the app's own palette (styles.css :root)
const PAGE = [16, 21, 27], INK = [228, 233, 238], MUTED = [151, 163, 176], RULE = [43, 53, 64], ACCENT = [109, 167, 230], SOFT = [28, 36, 45];
const PAGE_HEX = '#10151b';
const COMPANY = 'Knights Tent & Party Rental';

// the plan drawing as on screen (dark), minus selection and "doesn't fit" outlines; web fonts can't load inside an SVG image
const PLAN_CSS = `
:root{--f-display:"Arial Narrow","Roboto Condensed","Helvetica Neue",Arial,sans-serif;--f-body:Arial,Helvetica,sans-serif;--f-mono:Consolas,"Courier New",monospace}
.hit{stroke:none!important;fill:none!important}
.hseat.sel{fill:var(--chair)!important;stroke:none!important}
.calib,.calibpt{display:none}
`;

/** Characters the built-in PDF fonts can't show, swapped for close equivalents. */
const clean = (s) => String(s ?? '')
  .replace(/[−‐‑]/g, '-').replace(/→/g, '->').replace(/≈/g, '~').replace(/′/g, "'").replace(/″/g, '"')
  .replace(/ /g, ' ').replace(/[^\x00-\xff–—‘’“”•…€™]/g, '');

const loadImg = (src) => new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => bad(new Error('Could not load an image for the PDF.')); i.src = src; });

/** Logo for a dark page: the black-on-white file turned into a white mark on transparent, at a modest size. */
async function logoPng() {
  const img = await loadImg(logoUrl), w = 700, h = Math.round(w * img.height / img.width);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0, w, h);
  const px = g.getImageData(0, 0, w, h), d = px.data;
  for (let i = 0; i < d.length; i += 4) {
    const dark = 255 - (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114); // ink amount
    d[i] = d[i + 1] = d[i + 2] = 255; d[i + 3] = Math.round(dark * d[i + 3] / 255);
  }
  g.putImageData(px, 0, 0);
  return { url: c.toDataURL('image/png'), ar: h / w };
}

function pageCss() {
  let css = '';
  for (const sh of document.styleSheets) {
    let rules; try { rules = sh.cssRules; } catch { continue; } // cross-origin (web fonts)
    for (const r of rules) if (r instanceof CSSStyleRule) css += r.cssText + '\n';
  }
  return css + PLAN_CSS;
}

/** Render PlanSvg off-screen and rasterise it: base CSS width `base` px, drawn at `scale`× for print. */
async function planPng(props, css, base = 1100, scale = 2.6) {
  let svg = renderToStaticMarkup(createElement(PlanSvg, { ...props, sel: null, calib: null, dragging: false }));
  const vb = /viewBox="([^"]+)"/.exec(svg)[1].split(/[\s,]+/).map(Number), ar = vb[3] / vb[2];
  const w = base, h = Math.round(base * ar);
  svg = svg.replace(/<svg([^>]*)>/, (m, a) => `<svg${a} width="${w}" height="${h}"><style>${css.replace(/<\//g, '<\\/')}</style>`);
  const img = await loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
  const c = document.createElement('canvas'); c.width = Math.round(w * scale); c.height = Math.round(h * scale);
  const g = c.getContext('2d'); g.fillStyle = PAGE_HEX; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
  return { url: c.toDataURL('image/png'), ar };
}

// ---------- wording ----------
const tentLabel = (l) => `${l.W}' × ${l.L}' ${l.T.label.split(' (')[0].toLowerCase()}`;
const plural = (n, one, many = one + 's') => `${n} ${n === 1 ? one : many}`;

function seatingText(st, l) {
  if (l.S.kind === 'none') return 'Standing reception';
  if (l.S.kind === 'chair') return `${plural(l.units.length, 'chair')} in ceremony rows`;
  const by = {}; for (const u of l.units) by[u.type] = (by[u.type] || 0) + 1;
  const name = { rounds60: ['round table', ' (60")'], rounds72: ['round table', ' (72")'], banquet: ['banquet table', " (8')"] };
  const parts = Object.entries(by).map(([t, n]) => { const [w, sz] = name[t] || [SEATING[t].table, '']; return `${n} ${w}${n === 1 ? '' : 's'}${sz}`; });
  const head = l.items.find((i) => i.def.id === 'head');
  if (head) parts.push(head.sweet ? 'sweetheart table' : `head table for ${head.seats}`);
  return parts.join(', ') || 'No tables';
}

function exitText(l) {
  const ent = l.exits.filter((e) => e.main).length, ex = l.exits.length - ent;
  return [ent && plural(ent, 'entrance'), ex && plural(ex, 'exit')].filter(Boolean).join(', ') || 'None';
}

/** What's in the tent, in plain words, for the overview page. */
function features(st, l) {
  const out = [], by = {};
  for (const it of l.items) (by[it.def.id] = by[it.def.id] || []).push(it);
  const n = (id) => (by[id] || []).length;
  for (const d of by.dance || []) out.push(`${danceFinish(st).label} dance floor, ${d.dims[0]}' × ${d.dims[1]}'`);
  for (const s of by.stage || []) out.push(`Stage, ${s.dims[0]}' × ${s.dims[1]}'`);
  for (const h of by.head || []) out.push(h.sweet ? 'Sweetheart table' : `Head table for ${h.seats}`);
  if (n('buffet')) out.push(n('buffet') > 1 ? `${n('buffet')} buffet lines` : 'Buffet line');
  if (n('bar')) out.push(n('bar') > 1 ? `${n('bar')} bars` : 'Bar');
  if (n('dj')) out.push('DJ booth');
  if (n('cake')) out.push('Cake table');
  if (n('gift')) out.push('Gift & card table');
  if (n('photo')) out.push('Photo booth area');
  if (n('lounge')) out.push('Lounge seating');
  if (n('highboy')) out.push(`${n('highboy')} cocktail tables`);
  if (st.walls !== 'none') out.push(`Sidewalls, ${({ solid: 'solid white', window: 'cathedral window', clear: 'clear' })[st.walls] || st.walls}`);
  if (st.stringLights) out.push(`Bistro string lights (${(LIGHT_STYLES[st.lightStyle || 'swag'] || '').split(' (')[0].toLowerCase()})`);
  if (l.chands.length) out.push(plural(l.chands.length, 'chandelier'));
  if (st.uplights) out.push('LED uplighting');
  if (st.climate === 'fans') out.push('Fans for air circulation');
  if (st.climate.startsWith('heat')) out.push('Forced-air heating');
  if (st.chairStyle && l.S.kind !== 'none') out.push(`${st.chairStyle} chairs`);
  return out;
}

// ---------- page furniture ----------
function makeDoc() {
  const doc = new jsPDF({ unit: 'pt', format: 'letter', orientation: 'landscape', compress: true });
  doc.setProperties({ title: 'Event layout proposal', creator: COMPANY, author: COMPANY });
  paint(doc);
  return doc;
}
function paint(doc) { doc.setFillColor(...PAGE); doc.rect(0, 0, PW, PH, 'F'); }
/** New page with the dark background already down. */
function addPage(doc) { doc.addPage(); paint(doc); }
const color = (doc, c, kind = 'text') => (kind === 'text' ? doc.setTextColor(...c) : kind === 'fill' ? doc.setFillColor(...c) : doc.setDrawColor(...c));
function caps(doc, s, x, y, o = {}) {
  const t = clean(s).toUpperCase(), sp = o.space ?? 1.1;
  doc.setFont('helvetica', 'bold'); doc.setFontSize(o.size || 8); color(doc, o.color || MUTED);
  // jsPDF's own alignment ignores letter spacing, so measure it here
  const w = doc.getTextWidth(t) + sp * t.length; // jsPDF adds the spacing after every letter, the last one too
  const x0 = o.align === 'right' ? x - w : o.align === 'center' ? x - w / 2 : x;
  doc.setCharSpace(sp); doc.text(t, x0, y); doc.setCharSpace(0);
}

/** Compact header for inner pages: small logo left, page title right, rule underneath. Returns the content top y. */
function header(doc, logo, title, sub) {
  const lh = 30; doc.addImage(logo.url, 'PNG', M, 24, lh / logo.ar, lh, 'logo', 'FAST');
  caps(doc, title, PW - M, 36, { align: 'right', size: 10, color: ACCENT, space: 1.6 });
  if (sub) { doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); color(doc, MUTED); doc.text(clean(sub), PW - M, 50, { align: 'right' }); }
  color(doc, RULE, 'draw'); doc.setLineWidth(0.75); doc.line(M, 64, PW - M, 64);
  return 82;
}

function footers(doc, event) {
  const n = doc.getNumberOfPages();
  for (let i = 1; i <= n; i++) {
    doc.setPage(i);
    color(doc, RULE, 'draw'); doc.setLineWidth(0.5); doc.line(M, PH - 34, PW - M, PH - 34);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); color(doc, MUTED);
    doc.text(COMPANY, M, PH - 22);
    doc.text(clean(event), PW / 2, PH - 22, { align: 'center', maxWidth: 360 });
    doc.text(`Page ${i} of ${n}`, PW - M, PH - 22, { align: 'right' });
  }
}

/** Image scaled to fit a box, centred; thin frame round it. */
function fitImage(doc, img, fmt, x, y, w, h, frame = true) {
  let iw = w, ih = w * img.ar; if (ih > h) { ih = h; iw = h / img.ar; }
  const ix = x + (w - iw) / 2, iy = y + (h - ih) / 2;
  doc.addImage(img.url, fmt, ix, iy, iw, ih, undefined, 'FAST');
  if (frame) { color(doc, RULE, 'draw'); doc.setLineWidth(0.5); doc.rect(ix, iy, iw, ih); }
  return { x: ix, y: iy, w: iw, h: ih };
}

/** A row of labelled facts in boxes across the page (under a plan). */
function factStrip(doc, y, facts) {
  const w = CW / facts.length, h = 50;
  color(doc, SOFT, 'fill'); doc.rect(M, y, CW, h, 'F');
  facts.forEach(([k, v], i) => {
    const x = M + i * w;
    if (i) { color(doc, RULE, 'draw'); doc.setLineWidth(0.5); doc.line(x, y + 7, x, y + h - 7); }
    caps(doc, k, x + 10, y + 14, { size: 7 });
    doc.setFont('helvetica', 'bold'); doc.setFontSize(10); color(doc, INK);
    doc.text(doc.splitTextToSize(clean(v), w - 18).slice(0, 2), x + 10, y + 28);
  });
}

// ---------- pages ----------
function overviewPage(doc, logo, ctx, hero) {
  const { model, tents, date } = ctx;
  // masthead
  const lh = 54; doc.addImage(logo.url, 'PNG', M, 26, lh / logo.ar, lh, 'logo', 'FAST');
  caps(doc, 'Event layout proposal', PW - M, 46, { align: 'right', size: 11, color: ACCENT, space: 2 });
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); color(doc, MUTED); doc.text(`Prepared ${date}`, PW - M, 62, { align: 'right' });
  color(doc, ACCENT, 'draw'); doc.setLineWidth(1.5); doc.line(M, 94, PW - M, 94);

  // title
  doc.setFont('helvetica', 'bold'); doc.setFontSize(24); color(doc, INK);
  const title = doc.splitTextToSize(clean(model.siteName || 'Your event'), CW).slice(0, 2);
  doc.text(title, M, 128);
  let y = 128 + (title.length - 1) * 28 + 20;
  const where = [model.address, (SITES[model.sitePreset] || {}).label].filter(Boolean).join(' · ');
  if (where) { doc.setFont('helvetica', 'normal'); doc.setFontSize(11); color(doc, MUTED); doc.text(doc.splitTextToSize(clean(where), CW)[0], M, y); y += 8; }
  y += 18;

  // left column: at a glance + included
  const colW = 236, top = y, multi = tents.length > 1;
  const guests = tents.reduce((s, t) => s + t.st.guests, 0), seats = tents.reduce((s, t) => s + t.lay.seats + t.lay.headSeats, 0);
  const facts = [
    ['Guests', String(guests)],
    multi ? ['Tents', tents.map((t) => `${t.st.name}: ${tentLabel(t.lay)}`).join('\n')] : ['Tent', tentLabel(tents[0].lay)],
    ['Seating', multi ? tents.map((t) => `${t.st.name}: ${seatingText(t.st, t.lay)}`).join('\n') : seatingText(tents[0].st, tents[0].lay)],
  ];
  if (tents.some((t) => t.lay.S.kind !== 'none') && seats) facts.push(['Seats', String(seats)]);
  caps(doc, 'At a glance', M, y, { color: ACCENT, size: 8.5 }); y += 8;
  color(doc, ACCENT, 'draw'); doc.setLineWidth(0.75); doc.line(M, y, M + colW, y); y += 14;
  for (const [k, v] of facts) {
    caps(doc, k, M, y, { size: 7 }); y += 12;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); color(doc, INK);
    const lines = clean(v).split('\n').flatMap((ln) => doc.splitTextToSize(ln, colW));
    doc.text(lines, M, y); y += lines.length * 13.5 + 8;
  }
  y += 6;
  const inc = [...new Set(tents.flatMap((t) => features(t.st, t.lay)))];
  if (inc.length) {
    caps(doc, "What's included", M, y, { color: ACCENT, size: 8.5 }); y += 8;
    color(doc, ACCENT, 'draw'); doc.line(M, y, M + colW, y); y += 14;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); color(doc, INK);
    const room = PH - 50 - y, perLine = 13.2, cols = inc.length * perLine > room ? 2 : 1, cw = colW / cols - (cols > 1 ? 6 : 0);
    const per = Math.ceil(inc.length / cols);
    inc.forEach((f, i) => {
      const cx = M + Math.floor(i / per) * (colW / cols), cy = y + (i % per) * perLine;
      if (cy > PH - 48) return;
      color(doc, ACCENT, 'fill'); doc.circle(cx + 2.5, cy - 3.2, 1.4, 'F');
      color(doc, INK); doc.text(doc.splitTextToSize(clean(f), cw - 10)[0], cx + 9, cy);
    });
  }

  // right: 3D preview (or the plan, without WebGL)
  const rx = M + colW + 28, rw = PW - M - rx, rh = PH - 60 - top;
  if (hero) {
    const box = fitImage(doc, hero.img, hero.fmt, rx, top - 6, rw, rh - 16);
    doc.setFont('helvetica', 'italic'); doc.setFontSize(8); color(doc, MUTED);
    doc.text(hero.caption, box.x, box.y + box.h + 12);
  }
}

function planPage(doc, logo, img, title, sub, facts) {
  const top = header(doc, logo, title, sub);
  const bottom = facts ? PH - 40 - 62 : PH - 46;
  fitImage(doc, img, 'PNG', M, top, CW, bottom - top - 6, false);
  if (facts) factStrip(doc, PH - 40 - 56, facts);
}

function rentalPages(doc, logo, ctx) {
  const rows = allRentals(ctx.tents);
  const xQ = M + 360, xN = M + 384, wItem = 340, wNote = PW - M - xN;
  let y;
  const head = (cont) => {
    y = header(doc, logo, cont ? 'Rental summary (continued)' : 'Rental summary', ctx.model.siteName);
    caps(doc, 'Item', M, y, { size: 7.5 }); caps(doc, 'Qty', xQ, y, { size: 7.5, align: 'right' }); caps(doc, 'Details', xN, y, { size: 7.5 });
    y += 6; color(doc, INK, 'draw'); doc.setLineWidth(0.75); doc.line(M, y, PW - M, y); y += 4;
  };
  const room = (h) => { if (y + h > PH - 48) { addPage(doc); head(true); } };
  head(false);
  for (const r of rows) {
    if (r.grp) {
      room(40);
      y += 5; color(doc, SOFT, 'fill'); doc.rect(M, y, CW, 16, 'F');
      caps(doc, r.grp, M + 6, y + 11, { size: 8, color: ACCENT, space: 1.4 }); y += 16;
      continue;
    }
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5);
    const item = doc.splitTextToSize(clean(r.item), wItem);
    doc.setFontSize(8.5); const note = r.note ? doc.splitTextToSize(clean(r.note), wNote) : [];
    const h = Math.max(item.length * 11.5, note.length * 10.5) + 6.5;
    room(h);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); color(doc, INK); doc.text(item, M + 6, y + 12);
    doc.setFont('helvetica', 'bold'); doc.text(clean(r.qty), xQ, y + 12, { align: 'right' });
    if (note.length) { doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); color(doc, MUTED); doc.text(note, xN, y + 11.5); }
    y += h; color(doc, RULE, 'draw'); doc.setLineWidth(0.4); doc.line(M, y, PW - M, y);
  }
  // closing note
  const msg = 'This layout is a planning proposal for your review. Tent placement, table counts and equipment are confirmed with you at the site visit and on your rental agreement. Pole positions, exits and clearances shown are typical; the site, utilities, slope and local code requirements are verified before installation.';
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8); const lines = doc.splitTextToSize('Please note: ' + msg, CW - 24);
  const bh = lines.length * 10 + 13;
  // only the note left to place: a fresh page needs no table column headings
  if (y + bh + 8 > PH - 44) { addPage(doc); y = header(doc, logo, 'Rental summary (continued)', ctx.model.siteName) - 8; }
  y += 8;
  color(doc, SOFT, 'fill'); doc.rect(M, y, CW, bh, 'F'); color(doc, ACCENT, 'fill'); doc.rect(M, y, 3, bh, 'F');
  color(doc, MUTED); doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.text(lines, M + 12, y + 14.5);
}

/**
 * Build the client PDF. Returns { blob, filename }; the caller previews it and saves it.
 * model: the whole plan; tents: [{ st, lay }] per tent; ph: a site photo is in use; photoSrc: its data URL.
 */
export async function makeClientPdf({ model, tents, active = 0, ph, photoSrc }) {
  const date = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  const ctx = { model, tents, date };
  const [logo, css] = [await logoPng(), pageCss()];
  const multi = tents.length > 1;

  const plans = [];
  for (let i = 0; i < tents.length; i++) {
    const { st, lay } = tents[i];
    plans.push(await planPng({ st, lay, tents, active: i, view: 'tent', ph, photoSrc }, css));
  }
  const site = multi || ph ? await planPng({ st: tents[active].st, lay: tents[active].lay, tents, active, view: 'site', ph, photoSrc }, css, 1100, 2.2) : null;

  let hero = null;
  const shot = Scene3D.current && Scene3D.current.snapshot(1600, 1050, { light: false });
  if (shot) hero = { img: { url: shot, ar: 1050 / 1600 }, fmt: 'JPEG', caption: '3D preview for visualization. Colors and details are approximate.' };
  else hero = { img: plans[active], fmt: 'PNG', caption: 'Floor plan' };

  const doc = makeDoc();
  overviewPage(doc, logo, ctx, hero);
  tents.forEach(({ st, lay }, i) => {
    addPage(doc);
    planPage(doc, logo, plans[i], multi ? `Floor plan · ${st.name}` : 'Floor plan', model.siteName, [
      ['Tent', tentLabel(lay)],
      ['Guests', String(st.guests)],
      ['Seating', seatingText(st, lay)],
      ['Openings', exitText(lay)],
      ['Floor area', `${Math.round(lay.area).toLocaleString()} sq ft`],
    ]);
  });
  if (site) {
    addPage(doc);
    planPage(doc, logo, site, 'Site plan', model.siteName, null);
  }
  addPage(doc);
  rentalPages(doc, logo, ctx);
  footers(doc, model.siteName || '');

  const name = clean(model.siteName || 'Event').replace(/^example:\s*/i, '').replace(/[\\/:*?"<>|]+/g, '').trim().slice(0, 80) || 'Event';
  return { blob: doc.output('blob'), filename: `${name} - Layout Proposal.pdf` };
}
