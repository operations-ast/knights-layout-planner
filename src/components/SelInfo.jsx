import { useRef } from 'react';
import { SIDE_LABELS, KIND_LABELS } from './ExitsEditor.jsx';
import { MAX_SEATS, TABLE_TYPES } from '../lib/constants.js';

function RotCtl({ angle, selKey, onRotate, onSetAngle }) {
  const a = Math.round(angle);
  return (<>
    <button className="btn" aria-label="Rotate 15 degrees left" onClick={() => onRotate(-15)}>⟲ 15°</button>
    <button className="btn" aria-label="Rotate 15 degrees right" onClick={() => onRotate(15)}>⟳ 15°</button>
    <button className="btn" onClick={() => onRotate(90)}>Turn 90°</button>
    <label className="hint">Angle{' '}
      <input key={selKey + ':' + a} type="number" step={1} defaultValue={a}
        onKeyDown={(e) => { if (e.key === 'Enter') onSetAngle(parseFloat(e.target.value)); }}
        onBlur={(e) => { const v = parseFloat(e.target.value); if (v !== a) onSetAngle(v); }} /> °
    </label>
  </>);
}

export default function SelInfo({ view, calib, sel, lay, st, onCancelCalib, onApplyCalib, onRotate, onSetAngle, onRemove, onReflow, onExitKind, onRemoveExit, onAddExit, onRemoveChand, onAddChand, onSeats, onTableType, onAddTable, onRemoveTable }) {
  const ftRef = useRef(null);
  let body;
  if (view === 'site' && calib) {
    body = calib.pts.length < 2 ? (<>
      <span className="hint">Click {calib.pts.length ? 'the second point' : 'two points a known distance apart'} on the photo.</span>
      <button className="btn" onClick={onCancelCalib}>Cancel</button>
    </>) : (<>
      <label className="hint">Real distance{' '}
        <input ref={ftRef} type="number" min={1} step={0.5} aria-label="Real distance in feet" autoFocus
          onKeyDown={(e) => { if (e.key === 'Enter') onApplyCalib(parseFloat(e.target.value)); }} /> ft
      </label>
      <button className="btn primary" onClick={() => onApplyCalib(parseFloat(ftRef.current && ftRef.current.value))}>Apply scale</button>
      <button className="btn" onClick={onCancelCalib}>Cancel</button>
    </>);
  } else if (view === 'site' && sel === '__tent') {
    body = <><span className="name">Tent</span><RotCtl angle={st.tentAngle || 0} selKey={sel} onRotate={onRotate} onSetAngle={onSetAngle} /></>;
  } else {
    const exit = view === 'tent' && sel && sel.startsWith('x:') ? lay.exits[+sel.slice(2)] : null;
    const chand = view === 'tent' && sel && sel.startsWith('c:') ? lay.chands[+sel.slice(2)] : null;
    const unit = view === 'tent' && sel && sel.startsWith('u:') ? lay.units[+sel.slice(2)] : null;
    const item = view === 'tent' && sel && !unit && !exit && !chand ? lay.items.find((i) => i.key === sel) : null;
    if (chand) {
      body = (<>
        <span className="name">Chandelier {+sel.slice(2) + 1}</span>
        <span className="hint">{Math.round(chand.x)}' along · {Math.round(chand.y)}' across</span>
        <button className="btn" onClick={onAddChand}>+ Add another</button>
        <button className="btn danger" onClick={onRemoveChand}>Remove</button>
      </>);
    } else if (exit) {
      body = (<>
        <span className="name">{exit.main ? 'Entrance' : 'Exit'} {+sel.slice(2) + 1}</span>
        <span className="hint">{SIDE_LABELS[exit.side]} · {Math.round(exit.c)}' in</span>
        <select aria-label="Opening type" value={exit.kind} onChange={(e) => onExitKind(e.target.value)} style={{ width: 'auto' }}>
          {Object.entries(KIND_LABELS).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
        </select>
        <button className="btn danger" onClick={onRemoveExit}>Remove</button>
      </>);
    } else if (unit) {
      const isChair = lay.S.kind === 'chair', n = unit.seats ?? lay.per, max = MAX_SEATS[unit.type] || 12;
      body = (<>
        <span className="name">{isChair ? 'Chair' : 'Table'}</span>
        {!isChair && (
          <select aria-label="Table type" value={unit.type} onChange={(e) => onTableType(e.target.value)} style={{ width: 'auto' }}>
            {Object.entries(TABLE_TYPES).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
          </select>
        )}
        {!isChair && (
          <span className="stepper" role="group" aria-label="Chairs at this table">
            <button className="btn sm" aria-label="Remove a chair" disabled={n <= 0} onClick={() => onSeats(n - 1)}>−</button>
            <span className="cnt">{n} chair{n === 1 ? '' : 's'}</span>
            <button className="btn sm" aria-label="Add a chair" disabled={n >= max} onClick={() => onSeats(n + 1)}>+</button>
          </span>
        )}
        <RotCtl angle={unit.rot || 0} selKey={sel} onRotate={onRotate} onSetAngle={onSetAngle} />
        <button className="btn" onClick={() => onAddTable(unit.type)}>{isChair ? '+ Add chair' : '+ Add table'}</button>
        <button className="btn danger" onClick={onRemoveTable}>{isChair ? 'Remove chair' : 'Remove table'}</button>
        {st.tables && <button className="btn" onClick={onReflow}>Reset to auto</button>}
      </>);
    } else if (item) {
      body = (<>
        <span className="name">{item.def.label}</span>
        <RotCtl angle={item.rot} selKey={sel} onRotate={onRotate} onSetAngle={onSetAngle} />
        <button className="btn danger" onClick={onRemove}>Remove</button>
      </>);
    } else {
      body = view === 'site'
        ? <span className="hint">Drag the tent to place it on the site.</span>
        : <><span className="hint">Drag any item, table, exit or chandelier to move it.</span><button className="btn" onClick={onAddExit}>+ Add exit</button></>;
    }
  }
  return <div className="selinfo">{body}</div>;
}
