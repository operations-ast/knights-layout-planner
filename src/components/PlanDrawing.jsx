// SVG drawing of the tent plan and site plan. Units are feet.
import { r2, clamp, ft, danceFinish, climateCount, siteExtent, tentOrigin } from '../lib/planner.js';
import { outlinePath, wallRuns, yTop } from '../lib/shape.js';
import { LIGHT_INSET, BANQUET_SEATS, SEATING } from '../lib/constants.js';

function AccShape({ id, w, h, chairs, st, interactive, sel }) {
  const out = []; let k = 0; const K = () => k++;
  if (id === 'stage') {
    out.push(<rect key={K()} className="stage" width={w} height={h} />);
    for (let x = 4; x < w - 0.1; x += 4) out.push(<line key={K()} className="deck" x1={x} y1={0} x2={x} y2={h} />);
    for (let y = 8; y < h - 0.1; y += 8) out.push(<line key={K()} className="deck" x1={0} y1={y} x2={w} y2={y} />);
  } else if (id === 'dance') {
    const F = danceFinish(st), t = F.tile;
    for (let i = 0; i < w / t - 0.01; i++) for (let j = 0; j < h / t - 0.01; j++)
      out.push(<rect key={K()} fill={F.colors[(i + j) % 2]} x={i * t} y={j * t} width={r2(Math.min(t, w - i * t))} height={r2(Math.min(t, h - j * t))} />);
    out.push(<rect key={K()} className="dfedge" width={w} height={h} />);
    if ((st.acc.dance || {}).wrap) out.push(<circle key={K()} className="wrap" cx={w / 2} cy={h / 2} r={Math.min(w, h) * 0.3} />);
  } else if (id === 'head') {
    out.push(<rect key={K()} className="tbl" x={0} y={h - 3.5} width={w} height={2.5} />);
    for (let x = 8; x < w - 0.1; x += 8) out.push(<line key={K()} className="tbl" x1={x} y1={h - 3.5} x2={x} y2={h - 1} />);
    // each head table chair can be picked and dragged on its own (data-hseat)
    (chairs || []).forEach((c, i) => out.push(
      <rect key={K()} className={'chair' + (interactive ? ' hseat' : '') + (interactive && sel === 'h:' + i ? ' sel' : '')} data-hseat={interactive ? i : undefined}
        x={r2(c.x - 0.65)} y={r2(c.y - 0.65)} width={1.3} height={1.3} rx={0.3} />));
  } else if (id === 'dj') {
    out.push(<rect key={K()} className="zone" width={w} height={h} />, <rect key={K()} className="tbl" x={1} y={2.8} width={w - 2} height={2} />,
      <rect key={K()} className="stage" x={0.3} y={h - 1.5} width={1.2} height={1.2} />, <rect key={K()} className="stage" x={w - 1.5} y={h - 1.5} width={1.2} height={1.2} />);
  } else if (id === 'buffet') {
    out.push(<rect key={K()} className="zone" width={w} height={h} />, <rect key={K()} className="tbl" x={0} y={h / 2 - 1.25} width={w} height={2.5} />,
      <line key={K()} className="tbl" x1={8} y1={h / 2 - 1.25} x2={8} y2={h / 2 + 1.25} />);
    for (let x = 1; x < w - 1; x += 2.6) out.push(<rect key={K()} className="chafer" x={x} y={h / 2 - 0.6} width={1.8} height={1.2} rx={0.3} />);
  } else if (id === 'bar') {
    out.push(<rect key={K()} className="zone" width={w} height={h} />, <rect key={K()} className="tbl" x={2} y={0.5} width={w - 4} height={1.5} />, <rect key={K()} className="stage" x={1} y={3} width={w - 2} height={2.5} />);
  } else if (id === 'cake') {
    out.push(<circle key={K()} className="tbl" cx={w / 2} cy={h / 2} r={2} />, <circle key={K()} className="chafer" cx={w / 2} cy={h / 2} r={0.9} />);
  } else if (id === 'highboy') {
    out.push(<circle key={K()} className="zone" cx={w / 2} cy={h / 2} r={2.3} />, <circle key={K()} className="tbl" cx={w / 2} cy={h / 2} r={1.25} />);
  } else if (id === 'gift') {
    out.push(<rect key={K()} className="tbl" x={1} y={1.2} width={w - 2} height={2.5} />);
  } else if (id === 'photo') {
    out.push(<rect key={K()} className="zone" width={w} height={h} />, <rect key={K()} className="stage" x={1} y={0.4} width={w - 2} height={0.7} />, <rect key={K()} className="stage" x={w / 2 - 0.6} y={h - 2.2} width={1.2} height={1.2} />);
  } else if (id === 'lounge') {
    out.push(<rect key={K()} className="zone" width={w} height={h} />, <rect key={K()} className="sofa" x={2} y={0.6} width={w - 4} height={2.6} rx={0.6} />,
      <rect key={K()} className="sofa" x={1} y={5.6} width={2.6} height={2.6} rx={0.5} />, <rect key={K()} className="sofa" x={w - 3.6} y={5.6} width={2.6} height={2.6} rx={0.5} />,
      <rect key={K()} className="tbl" x={w / 2 - 2.5} y={4.6} width={5} height={2.4} rx={0.3} />);
  }
  return <>{out}</>;
}

function UnitShape({ u, S, seatsPer }) {
  // the label is how many guests sit at this table (the last table may seat fewer)
  const { x, y } = u, n = u.seats ?? seatsPer, out = []; let k = 0; const K = () => k++;
  if (S.kind === 'round') {
    const R = S.r + 0.85;
    for (let i = 0; i < n; i++) { const a = i * 2 * Math.PI / n - Math.PI / 2; out.push(<circle key={K()} className="chair" cx={r2(x + R * Math.cos(a))} cy={r2(y + R * Math.sin(a))} r={0.62} />); }
    out.push(<circle key={K()} className="tbl" cx={x} cy={y} r={S.r} />, <text key={K()} className="num seats" x={x} y={y} fontSize={S.r * 0.7}>{n}</text>);
  } else if (S.kind === 'banquet') {
    for (const [dx, sy] of BANQUET_SEATS.slice(0, n)) out.push(<rect key={K()} className="chair" x={x + dx - 0.6} y={y + sy * 2.05 - 0.55} width={1.2} height={1.1} rx={0.25} />);
    out.push(<rect key={K()} className="tbl" x={x - 4} y={y - 1.25} width={8} height={2.5} />, <text key={K()} className="num seats" x={x} y={y} fontSize={1.5}>{n}</text>);
  } else if (S.kind === 'chair') {
    out.push(<rect key={K()} className="chair" x={x - 0.75} y={y - 0.75} width={1.5} height={1.5} rx={0.3} />);
  } else {
    out.push(<circle key={K()} className="tbl" cx={x} cy={y} r={S.r} />, <circle key={K()} className="chair" cx={x} cy={y} r={0.4} />);
  }
  return <>{out}</>;
}

function TentDrawing({ st, l, interactive, fs, sel }) {
  const { W, L, sh } = l, k = l.T.stake, out = []; let n = 0; const K = () => n++;
  const floorCls = 'floor' + (st.tentType === 'cleartop' ? ' clear' : '');
  if (sh.oval) {
    out.push(<path key={K()} className="stake" d={outlinePath(sh, k)} />);
    out.push(<path key={K()} className={floorCls} d={outlinePath(sh)} />);
  } else {
    out.push(<rect key={K()} className="stake" x={-k} y={-k} width={L + 2 * k} height={W + 2 * k} rx={k / 2} />);
    out.push(<rect key={K()} className={floorCls} x={0} y={0} width={L} height={W} />);
  }
  if (st.climate.startsWith('heat')) {
    const c = climateCount(st, l.area), nb = Math.ceil(c / 2), nt = c - nb;
    const put = (cnt, top) => {
      for (let i = 0; i < cnt; i++) {
        const x = (i + 1) * L / (cnt + 1), y0 = top ? -7 : W + 3;
        out.push(<line key={K()} className="duct" x1={x} y1={top ? -3 : W} x2={x} y2={top ? 0 : W + 3} />, <rect key={K()} className="heater" x={x - 1.5} y={y0} width={3} height={4} />);
      }
    };
    put(nb, false); put(nt, true);
  }
  for (const it of l.items) {
    const [dw, dh] = it.dims, cx = it.x + it.w / 2, cy = it.y + it.h / 2;
    out.push(
      <g key={'i-' + it.key} className={'item' + (interactive && sel === it.key ? ' sel' : '') + (it.fit ? '' : ' bad')} data-key={interactive ? it.key : undefined}
        transform={`translate(${r2(cx)} ${r2(cy)}) rotate(${it.rot}) translate(${-dw / 2} ${-dh / 2})`}>
        <rect className="hit" width={dw} height={dh} />
        <AccShape id={it.def.id} w={dw} h={dh} chairs={it.chairs} st={st} interactive={interactive} sel={sel} />
      </g>);
  }
  l.units.forEach((u, i) => {
    const shape = <UnitShape u={u} S={SEATING[u.type] || l.S} seatsPer={st.seatsPer} />;
    if (!interactive) { out.push(u.rot ? <g key={'u-' + i} transform={`rotate(${u.rot} ${u.x} ${u.y})`}>{shape}</g> : <g key={'u-' + i}>{shape}</g>); return; }
    const { hx, hy } = SEATING[u.type] || l.S;
    out.push(
      <g key={'u-' + i} className={'unit' + (sel === 'u:' + i ? ' sel' : '') + (u.bad ? ' bad' : '')} data-unit={i} transform={u.rot ? `rotate(${u.rot} ${u.x} ${u.y})` : undefined}>
        <rect className="hit" x={r2(u.x - hx)} y={r2(u.y - hy)} width={2 * hx} height={2 * hy} />
        {shape}
      </g>);
  });
  for (const p of l.poles) out.push(p.inner
    ? <circle key={K()} className="pole inner" cx={r2(p.x)} cy={r2(p.y)} r={0.55} />
    : <rect key={K()} className="pole" x={r2(p.x) - 0.35} y={r2(p.y) - 0.35} width={0.7} height={0.7} />);
  // walls with exit openings
  const wc = st.walls === 'none' ? 'wall open' : 'wall';
  if (sh.oval) for (const run of wallRuns(sh, l.exits)) out.push(<polyline key={K()} className={wc} fill="none" points={run.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ')} />);
  else for (const side of ['top', 'bottom', 'left', 'right']) {
    const hz = side === 'top' || side === 'bottom', len = hz ? L : W;
    const gaps = l.exits.filter((e) => e.side === side).map((e) => [e.c - 3, e.c + 3]).sort((a, b) => a[0] - b[0]);
    let a = 0; const segs = []; for (const [g0, g1] of gaps) { segs.push([a, g0]); a = g1; } segs.push([a, len]);
    for (const [p, q] of segs) {
      if (q - p < 0.01) continue;
      const c = side === 'top' || side === 'left' ? 0 : (hz ? W : L);
      out.push(hz ? <line key={K()} className={wc} x1={r2(p)} y1={c} x2={r2(q)} y2={c} /> : <line key={K()} className={wc} x1={c} y1={r2(p)} x2={c} y2={r2(q)} />);
    }
  }
  const ls = st.lightStyle || 'swag';
  if (st.stringLights && ls !== 'swag') {
    // perimeter run, hung just inside the wall line (follows the oval on sailcloths)
    out.push(<path key={K()} className="light" d={outlinePath(sh, -LIGHT_INSET)} />);
  }
  if (st.stringLights && ls !== 'perimeter') {
    const c = Math.max(1, Math.round(L / 10)), pts = [];
    for (let i = 0; i <= c; i++) { const x = i * L / c, t = yTop(sh, x); pts.push(`${r2(x)},${r2(i % 2 ? W - t : t)}`); }
    out.push(<polyline key={K()} className="light" points={pts.join(' ')} />);
  }
  l.chands.forEach((c, i) => {
    const x = r2(c.x), y = r2(c.y);
    out.push(
      <g key={'c-' + i} className={interactive ? 'chandg' + (sel === 'c:' + i ? ' sel' : '') : undefined} data-chand={interactive ? i : undefined}>
        {interactive && <circle className="hit" cx={x} cy={y} r={Math.max(1.6, fs * 1.2)} />}
        <circle className="chand" cx={x} cy={y} r={fs * 0.45} />
        <circle className="light" cx={x} cy={y} r={fs * 0.95} style={{ strokeDasharray: 'none', strokeWidth: 1 }} />
      </g>);
  });
  l.exits.forEach((e, i) => {
    const t = e.main ? 'ENTRANCE · EXIT' : 'EXIT', parts = [];
    // e.p is the wall coordinate at the opening (curved on an oval)
    if (e.side === 'bottom') parts.push(<line key="a" className="exitarrow" x1={e.c} y1={e.p - 2} x2={e.c} y2={e.p + 2} markerEnd="url(#arr)" />, <text key="t" className="exitt" x={e.c} y={e.p + 2.6 + fs} fontSize={fs * 0.9}>{t}</text>);
    else if (e.side === 'top') parts.push(<line key="a" className="exitarrow" x1={e.c} y1={e.p + 2} x2={e.c} y2={e.p - 2} markerEnd="url(#arr)" />, <text key="t" className="exitt" x={e.c} y={e.p - 2.8} fontSize={fs * 0.9}>{t}</text>);
    else {
      const x = e.p, d = e.side === 'right' ? 1 : -1;
      parts.push(<line key="a" className="exitarrow" x1={x - 2 * d} y1={e.c} x2={x + 2 * d} y2={e.c} markerEnd="url(#arr)" />,
        <text key="t" className="exitt" transform={`translate(${x + d * (2.8 + fs * 0.5)} ${e.c}) rotate(${d * 90})`} fontSize={fs * 0.9}>{t}</text>);
    }
    out.push(
      <g key={'x-' + i} className={interactive ? 'exitg' + (sel === 'x:' + i ? ' sel' : '') : undefined} data-exit={interactive ? i : undefined}>
        {interactive && <circle className="hit" cx={r2(e.x)} cy={r2(e.y)} r={4} />}
        {parts}
      </g>);
  });
  for (const it of l.items) {
    if (!it.def.short) continue;
    const cx = it.x + it.w / 2, cy = it.y + it.h / 2, id = it.def.id, vert = it.h > it.w * 1.25;
    let t = it.def.short; if (id === 'dance' || id === 'stage') t += ` ${it.dims[0]}×${it.dims[1]}`;
    const f = Math.min(fs, (vert ? it.h : it.w) / (t.length * 0.5));
    out.push(<text key={K()} className={'lbl' + (id === 'stage' ? ' inv' : '')} fontSize={r2(f)} transform={`translate(${r2(cx)} ${r2(cy)})${vert ? ' rotate(-90)' : ''}`}>{t}</text>);
  }
  return <>{out}</>;
}

function ScaleBar({ x, y, maxLen, fs }) {
  const step = maxLen <= 40 ? 5 : maxLen <= 90 ? 10 : maxLen <= 180 ? 20 : 50;
  return (<>
    <rect className="sb1" x={x} y={y} width={step} height={fs * 0.45} />
    <rect className="sb2" x={x + step} y={y} width={step} height={fs * 0.45} />
    <text className="sbt" x={x} y={y + fs * 1.4} fontSize={fs * 0.75}>0</text>
    <text className="sbt" x={x + step} y={y + fs * 1.4} fontSize={fs * 0.75}>{step}</text>
    <text className="sbt" x={x + 2 * step} y={y + fs * 1.4} fontSize={fs * 0.75}>{2 * step} FT</text>
  </>);
}

function DimLines({ x0, y0, len, horiz, off, fs, label }) {
  if (horiz) {
    const y = y0 - off;
    return (<>
      <line className="ext" x1={x0} y1={y0} x2={x0} y2={y - 1} />
      <line className="ext" x1={x0 + len} y1={y0} x2={x0 + len} y2={y - 1} />
      <line className="dim" x1={x0} y1={y} x2={x0 + len} y2={y} />
      <line className="dim" x1={x0 - 0.7} y1={y + 0.7} x2={x0 + 0.7} y2={y - 0.7} />
      <line className="dim" x1={x0 + len - 0.7} y1={y + 0.7} x2={x0 + len + 0.7} y2={y - 0.7} />
      <text className="dimt" x={x0 + len / 2} y={y - 0.6} fontSize={fs * 0.85}>{label}</text>
    </>);
  }
  const x = x0 - off;
  return (<>
    <line className="ext" x1={x0} y1={y0} x2={x - 1} y2={y0} />
    <line className="ext" x1={x0} y1={y0 + len} x2={x - 1} y2={y0 + len} />
    <line className="dim" x1={x} y1={y0} x2={x} y2={y0 + len} />
    <line className="dim" x1={x - 0.7} y1={y0 + 0.7} x2={x + 0.7} y2={y0 - 0.7} />
    <line className="dim" x1={x - 0.7} y1={y0 + len + 0.7} x2={x + 0.7} y2={y0 + len - 0.7} />
    <text className="dimt" transform={`translate(${x - 0.6} ${y0 + len / 2}) rotate(-90)`} fontSize={fs * 0.85}>{label}</text>
  </>);
}

const Defs = () => (
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--ok)" />
    </marker>
  </defs>
);

/** One tent on the site plan: clearance ring (photo mode), the tent itself, its generator and its name. */
function SiteTent({ t, i, active, sel, ph, fs, multi }) {
  const { st, lay } = t, { W, L } = lay, k = lay.T.stake, o = tentOrigin(st, lay, ph);
  const tr = `translate(${r2(o.x + L / 2)} ${r2(o.y + W / 2)}) rotate(${st.tentAngle || 0}) translate(${-L / 2} ${-W / 2})`;
  const gx = L + k + 20, gy = W / 2 - 2, isSel = i === active && sel === '__tent';
  return (<>
    {ph && (
      <g transform={tr}>
        <rect className="setback" x={-20} y={-20} width={L + 40} height={W + 40} rx={20} style={{ strokeWidth: 2 }} />
        <text className="sett" x={L / 2} y={-20 - fs * 0.5} fontSize={fs * 0.8} textAnchor="middle" style={{ paintOrder: 'stroke', stroke: 'var(--tent)', strokeWidth: '3px' }}>20' CLEARANCE</text>
      </g>
    )}
    <g className={'tentg' + (isSel ? ' sel' : '') + (multi && i === active ? ' active' : '')} data-key={`__tent:${i}`} transform={tr}>
      <TentDrawing st={st} l={lay} interactive={false} fs={Math.min(fs, clamp(Math.max(L, W) / 50, 0.9, 2.4))} sel={sel} />
    </g>
    {st.generator && (
      <g transform={tr}>
        <line className="dim" x1={L} y1={gy + 2} x2={gx} y2={gy + 2} style={{ strokeDasharray: '4 3' }} />
        <rect className="gen" x={gx} y={gy} width={7} height={4} />
        <text className="dimt" x={gx + 3.5} y={gy - 1} fontSize={fs * 0.7}>GENERATOR · 20' MIN.</text>
      </g>
    )}
    {multi && (
      <text className="tentname" x={r2(o.x + L / 2)} y={r2(o.y + W / 2)} fontSize={fs * 1.1}>{st.name}</text>
    )}
  </>);
}

/** tents: [{ st, lay }] for every tent (used by the site view); st/lay: the active tent (tent view). */
export default function PlanSvg({ st, lay, tents, active = 0, view, sel, calib, ph, photoSrc, svgRef, dragging, ...handlers }) {
  const { W, L } = lay, k = lay.T.stake;
  const cls = [dragging ? 'dragging' : '', calib && view === 'site' ? 'calibrating' : ''].filter(Boolean).join(' ') || undefined;

  if (view === 'tent') {
    const fs = clamp(Math.max(L, W) / 50, 0.9, 2.4), m = k + 6 + fs * 2.2;
    return (
      <svg id="plan" ref={svgRef} className={cls} xmlns="http://www.w3.org/2000/svg" role="img"
        viewBox={`${-m} ${-m} ${L + 2 * m} ${W + 2 * m + fs * 1.5}`} aria-label={`Tent plan, ${W} by ${L} foot ${lay.T.label}`} {...handlers}>
        <Defs />
        <TentDrawing st={st} l={lay} interactive fs={fs} sel={sel} />
        <DimLines x0={0} y0={-k} len={L} horiz off={3 + fs * 0.4} fs={fs} label={ft(L)} />
        <DimLines x0={-k} y0={0} len={W} horiz={false} off={3 + fs * 0.4} fs={fs} label={ft(W)} />
        <ScaleBar x={0} y={W + k + 3 + fs * 0.6} maxLen={L} fs={fs} />
      </svg>
    );
  }

  const e = siteExtent(st, ph), SL = e.l, SW = e.w, fs = Math.max(SL, SW) / 55, m = Math.max(SL, SW) * 0.07 + fs * 2;
  const all = tents && tents.length ? tents : [{ st, lay }], multi = all.length > 1;
  return (
    <svg id="plan" ref={svgRef} className={cls} xmlns="http://www.w3.org/2000/svg" role="img"
      viewBox={`${-m} ${-m} ${SL + 2 * m} ${SW + 2 * m}`} aria-label={ph ? 'Site plan over satellite photo' : `Site plan, ${SL} by ${SW} foot site`} {...handlers}>
      <Defs />
      {ph ? (
        <image href={photoSrc} x={0} y={0} width={r2(SL)} height={r2(SW)} preserveAspectRatio="none" />
      ) : (<>
        <rect className={st.surface === 'grass' || st.surface === 'gravel' ? 'soft' : 'hard'} x={0} y={0} width={SL} height={SW} />
        {SL > 45 && SW > 45 && (<>
          <rect className="setback" x={20} y={20} width={SL - 40} height={SW - 40} />
          <text className="sett" x={22} y={20 + fs * 1.1} fontSize={fs * 0.7}>20' SETBACK FROM LOT LINES</text>
        </>)}
        <rect className="siteline" x={0} y={0} width={SL} height={SW} />
      </>)}
      {all.map((t, i) => <SiteTent key={i} t={t} i={i} active={active} sel={sel} ph={ph} fs={fs} multi={multi} />)}
      {!ph && (<>
        <DimLines x0={0} y0={0} len={SL} horiz off={fs * 1.6} fs={fs} label={`SITE ${ft(SL)}`} />
        <DimLines x0={0} y0={0} len={SW} horiz={false} off={fs * 1.6} fs={fs} label={ft(SW)} />
      </>)}
      <ScaleBar x={0} y={SW + fs * 1.2} maxLen={SL} fs={fs} />
      {ph && <text className="attr" x={SL - fs * 0.5} y={SW - fs * 0.5} fontSize={fs * 0.6}>Imagery: Google{st.photo.calibrated ? '' : ' · scale not set'}</text>}
      {calib && (<>
        {calib.pts.length === 2 && <line className="calib" x1={calib.pts[0].x} y1={calib.pts[0].y} x2={calib.pts[1].x} y2={calib.pts[1].y} />}
        {calib.pts.map((q, i) => <circle key={i} className="calibpt" cx={q.x} cy={q.y} r={fs * 0.35} />)}
      </>)}
    </svg>
  );
}
