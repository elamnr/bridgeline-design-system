import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
export function Elbow({ corner = 'tl', width = 180, height = 96, arm = 100, bar = 28, outerRadius, innerRadius, color = 'amber', mode = 'color', label, keyline = false, keylineOffset, style }) {
  const W = width, H = height, A = Math.min(arm, W), B = Math.min(bar, H);
  const R = Math.max(0, Math.min(outerRadius ?? Math.min(A, H), W, H));
  const r = Math.max(0, Math.min(innerRadius ?? B * 0.9, W - A, H - B));
  const d = `M0,${H} L0,${R} A${R},${R} 0 0 1 ${R},0 L${W},0 L${W},${B} L${A + r},${B} A${r},${r} 0 0 0 ${A},${B + r} L${A},${H} Z`;
  const o = keylineOffset ?? Math.round(Math.min(A, B) / 2);
  const k = R > o ? `M${o},${H} L${o},${R} A${R - o},${R - o} 0 0 1 ${R},${o} L${W},${o}` : `M${o},${H} L${o},${o} L${W},${o}`;
  const fx = corner === 'tr' || corner === 'br', fy = corner === 'bl' || corner === 'br';
  const t = `translate(${fx ? W : 0},${fy ? H : 0}) scale(${fx ? -1 : 1},${fy ? -1 : 1})`;
  const fill = mode === 'color' ? blColor(color) : mode === 'mono' ? 'var(--bl-mono-ink)' : 'none';
  const txt = mode === 'color' ? blOn(color) : mode === 'mono' ? 'var(--bl-knockout)' : 'var(--bl-mono-ink)';
  const kc = mode === 'color' ? 'var(--bl-space)' : mode === 'mono' ? 'var(--bl-knockout)' : 'var(--bl-mono-ink)';
  return (
    <div style={{ position: 'relative', width: W, height: H, flexShrink: 0, ...style }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
        <path d={d} transform={t} style={{ fill, stroke: mode === 'outline' ? 'var(--bl-mono-ink)' : 'none', strokeWidth: 'var(--bl-outline-w)', vectorEffect: 'non-scaling-stroke' }} />
        {keyline && <path d={k} transform={t} style={{ fill: 'none', stroke: kc, strokeWidth: 2 }} />}
      </svg>
      {label != null && (
        <div style={{ position: 'absolute', left: fx ? W - A : 0, width: A, [fy ? 'top' : 'bottom']: 4, boxSizing: 'border-box', padding: '0 8px', textAlign: 'right', color: txt, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: Math.max(11, Math.round(B * 0.6)), lineHeight: 1, textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)' }}>{label}</div>
      )}
    </div>
  );
}
