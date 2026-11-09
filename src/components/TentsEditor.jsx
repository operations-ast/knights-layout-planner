import { useEffect, useRef, useState } from 'react';

/**
 * Rail section listing every tent on the site. The highlighted tent is the one the
 * settings below (and the tent plan) are editing.
 */
export default function TentsEditor({ tents, active, st, update, onPick, onAdd, onDuplicate, onRemove }) {
  const [armed, setArmed] = useState(-1);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  const remove = (i) => {
    if (armed !== i) { setArmed(i); clearTimeout(timer.current); timer.current = setTimeout(() => setArmed(-1), 3000); return; }
    clearTimeout(timer.current); setArmed(-1); onRemove(i);
  };
  return (
    <section>
      <h2>Tents</h2>
      {tents.map((t, i) => (
        <div className="tentrow" key={i}>
          <button className="btn pick" aria-pressed={i === active} onClick={() => onPick(i)} title="Edit this tent">
            {t.name} <span className="hint" style={{ display: 'inline' }}>· {t.lay.W}' × {t.lay.L}' · {t.guests}</span>
          </button>
          {tents.length > 1
            ? <button className="btn sm danger" onClick={() => remove(i)} aria-label={`Remove ${t.name}`}>{armed === i ? 'Confirm' : '✕'}</button>
            : <span />}
          <span />
        </div>
      ))}
      <label className="field"><span>Name of selected tent</span>
        <input type="text" value={st.name || ''} onChange={(e) => { const v = e.target.value; update((n) => { n.name = v; }); }} />
      </label>
      <div className="btnrow">
        <button className="btn" onClick={onAdd}>+ Add tent</button>
        <button className="btn" onClick={onDuplicate}>Duplicate selected</button>
      </div>
      <p className="hint">The settings below apply to the selected tent. On the site plan, click a tent to select it and drag it into place.</p>
    </section>
  );
}
