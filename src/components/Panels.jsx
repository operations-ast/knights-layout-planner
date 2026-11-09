// Read-only panels: stat tiles, CAD title block, rental list, checks.
import { useState } from 'react';
import { SITES, STANDING_SQFT } from '../lib/constants.js';
import { exitCount, siteFits } from '../lib/planner.js';
import { allRentals, rentalText, checks } from '../lib/reports.js';
import { siteNotes } from '../lib/model.js';

function Tile({ k, v, s, pill }) {
  return (
    <div className="stat">
      <span className="k">{k}</span><span className="v">{v}</span><span className="s">{s}</span>
      {pill && <span className={`pill ${pill[0]}`}>{pill[1]}</span>}
    </div>
  );
}

/** Stats for the active tent; `count` = number of tents on the site. */
export function Stats({ st, lay, count = 1 }) {
  const { W, L, T, S } = lay, area = Math.round(lay.area);
  const chairs = S.kind === 'chair', none = S.kind === 'none', multi = count > 1;
  // short = tables that would not fit (auto), or guests without a seat (tables set by hand)
  const short = lay.manual ? Math.max(0, lay.seated - lay.seats) : lay.needed - Math.min(lay.capacity, lay.needed);
  const seatPill = none
    ? (lay.area >= st.guests * STANDING_SQFT ? ['ok', 'Standing room'] : ['bad', 'Too tight'])
    : short > 0 ? ['bad', lay.manual ? `${short} without a seat` : `Short ${short}`] : ['ok', lay.manual ? 'Set by you' : 'Everyone seated'];
  return (
    <div className="stats">
      <Tile k={multi ? st.name : 'Tent'} v={`${W}' × ${L}'`} s={`${T.label}${lay.sh.oval ? ' (oval)' : ''} · ${area.toLocaleString()} sq ft`} pill={lay.auto ? ['ok', 'Auto size'] : ['warn', 'Size set by you']} />
      <Tile k="Seating" v={none ? 'No seating' : chairs ? `${lay.units.length} chairs` : `${lay.units.length} tables`}
        s={none ? `standing room for ${st.guests} guests` : chairs ? `for ${st.guests} guests` : `${lay.seats} seats${lay.headSeats ? ` + ${lay.headSeats} at head table` : ''}`}
        pill={seatPill} />
      <Tile k="Space per guest" v={(area / st.guests).toFixed(1)} s={`sq ft · guide ${S.sqft} for seating`} />
      <Tile k="Site" v={`${st.siteL}' × ${st.siteW}'`} s={`${multi ? `${count} tents · ` : ''}${exitCount(st.guests)} exits required · ${st.surface}`}
        pill={siteFits(st, W, L, T.stake) ? ['ok', 'Tent fits site'] : ['bad', 'Tent too big for site']} />
    </div>
  );
}

export function TitleBlock({ st, lay, view, tents }) {
  const { W, L, T } = lay, multi = tents && tents.length > 1;
  const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  const totalGuests = multi ? tents.reduce((n, t) => n + t.st.guests, 0) : st.guests;
  const cells = [
    ['Event / site', st.siteName || 'Untitled layout'],
    ['Location', `${st.address || SITES[st.sitePreset].label} · ${st.surface}`],
    ['Guests', multi && view === 'site' ? `${totalGuests} total` : st.guests],
    ['Tent', multi && view === 'site' ? `${tents.length} tents` : `${multi ? `${st.name} · ` : ''}${W}' × ${L}' ${T.label.split(' (')[0]}`],
    ['Date', today],
    ['Sheet', view === 'tent' ? 'L-1' : 'L-2'],
  ];
  return (
    <div className="titleblock">
      {cells.map(([k, v]) => <div key={k}><div className="k">{k}</div><div className="v">{v}</div></div>)}
      <div className="foot">For planning only. Poles, exits and table counts are typical. Field-verify site, utilities, slope and code clearances before install.</div>
    </div>
  );
}

/** Rental list for every tent on the site. tents: [{ st, lay }]. */
export function RentalList({ tents }) {
  const [label, setLabel] = useState('Copy list');
  const [fallback, setFallback] = useState(null);
  const rows = allRentals(tents);
  const copy = () => {
    const text = rentalText(tents);
    const fb = () => { setFallback(text); setLabel('Select and copy below'); };
    try {
      navigator.clipboard.writeText(text).then(() => { setLabel('Copied'); setFallback(null); setTimeout(() => setLabel('Copy list'), 1600); }, fb);
    } catch { fb(); }
  };
  return (
    <section className="card">
      <div className="cardhead"><h2>Rental list{tents.length > 1 ? ` · ${tents.length} tents` : ''}</h2><button className="btn" onClick={copy}>{label}</button></div>
      <div className="tablewrap">
        <table>
          <thead><tr><th>Item</th><th className="q">Qty</th><th>Notes</th></tr></thead>
          <tbody>
            {rows.map((r, i) => r.grp
              ? <tr key={i} className="grp"><td colSpan={3}>{r.grp}</td></tr>
              : <tr key={i}><td>{r.item}</td><td className="q">{r.qty}</td><td className="n">{r.note}</td></tr>)}
          </tbody>
        </table>
      </div>
      {fallback != null && (
        <textarea className="copyfall" readOnly aria-label="Rental list text" value={fallback} autoFocus onFocus={(e) => e.target.select()} />
      )}
    </section>
  );
}

/** Checks for the active tent, plus site-wide notes about how the tents sit together. */
export function Notes({ st, lay, ph, tents }) {
  const multi = tents && tents.length > 1;
  const site = multi ? siteNotes(tents.map((t) => t.st), tents.map((t) => t.lay), ph) : [];
  const mine = checks(st, lay, ph).map(([c, t]) => [c, multi ? `${st.name}: ${t}` : t]);
  // problems first: site-wide bad/warn, then this tent, then info
  const rank = { bad: 0, warn: 1, ok: 2, info: 3 };
  const all = [...site, ...mine].sort((a, b) => rank[a[0]] - rank[b[0]]);
  return (
    <section className="card">
      <div className="cardhead"><h2>Checks &amp; notes</h2></div>
      <ul className="notes">{all.map(([c, t], i) => <li key={i} className={c}>{t}</li>)}</ul>
    </section>
  );
}
