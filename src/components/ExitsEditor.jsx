import { exitCount, exitsFromLayout, nextExitSpot } from '../lib/planner.js';

export const SIDE_LABELS = { bottom: 'Bottom side', top: 'Top side', left: 'Left end', right: 'Right end' };
// an entrance is also a code exit; "Exit only" is an emergency/egress opening
export const KIND_LABELS = { entrance: 'Entrance', exit: 'Exit only' };

/** Rail section: list, add, move and remove the tent's entrances and exits. */
export default function ExitsEditor({ st, lay, update, sel, onSelect }) {
  const need = exitCount(st.guests), have = lay.exits.length, custom = !!st.exits;
  // every edit works on a custom list, seeded from what is currently drawn
  const edit = (fn) => update((n) => { if (!n.exits) n.exits = exitsFromLayout(lay); fn(n.exits, n); });

  return (
    <section>
      <h2>Entrances &amp; exits</h2>
      <p className="hint">
        {have} opening{have === 1 ? '' : 's'} · {need} required for {st.guests} guests.{' '}
        {custom ? 'Placed by you.' : 'Placed automatically; any change below switches to your own layout.'}
        {have < need && <b style={{ color: 'var(--bad)' }}> Add {need - have} more.</b>}
      </p>
      <div className="exits">
        {lay.exits.map((e, i) => (
          <div className="exitrow" key={i} style={sel === 'x:' + i ? { background: 'var(--accent-soft)' } : undefined}>
            <button className="btn sm no" title="Select in the plan" onClick={() => onSelect('x:' + i)}>{i + 1}</button>
            <select aria-label={`Opening ${i + 1} side`} value={e.side} onChange={(ev) => { const v = ev.target.value; edit((x) => { x[i] = { ...x[i], side: v }; }); }}>
              {Object.entries(SIDE_LABELS).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
            </select>
            <select aria-label={`Opening ${i + 1} type`} value={e.kind} onChange={(ev) => { const v = ev.target.value; edit((x) => { x[i] = { ...x[i], kind: v }; }); }}>
              {Object.entries(KIND_LABELS).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
            </select>
            <button className="btn sm danger" aria-label={`Remove opening ${i + 1}`} title="Remove" onClick={() => { edit((x) => { x.splice(i, 1); }); if (sel && sel.startsWith('x:')) onSelect(null); }}>✕</button>
            <span className="pos" title="Distance from the left or top corner">{Math.round(e.c)}'</span>
            <input type="range" min={0} max={100} step={1} aria-label={`Opening ${i + 1} position along the wall`} value={Math.round(e.f * 100)}
              onChange={(ev) => { const v = +ev.target.value / 100; edit((x) => { x[i] = { ...x[i], f: v }; }); }} />
          </div>
        ))}
      </div>
      <div className="btnrow">
        <button className="btn" onClick={() => edit((x) => { x.push(nextExitSpot(x)); })}>+ Add exit</button>
        {custom && <button className="btn" onClick={() => { update((n) => { n.exits = null; }); onSelect(null); }}>Reset to auto</button>}
      </div>
      <p className="hint">Tip: click an exit in the tent plan and drag it along the wall, or press Delete to remove it.</p>
    </section>
  );
}
