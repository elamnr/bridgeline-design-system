import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
export function Bar({ length = '100%', thickness = 24, orientation = 'horizontal', caps = 'none', color = 'amber', mode = 'color', label, labelAlign = 'end', keyline = false, keylineOffset, dividers = [], style, children }) {
  const h = orientation === 'horizontal';
  const r = thickness / 2;
  const L = caps === 'start' || caps === 'both', R = caps === 'end' || caps === 'both';
  const radius = h ? `${L ? r : 0}px ${R ? r : 0}px ${R ? r : 0}px ${L ? r : 0}px` : `${L ? r : 0}px ${L ? r : 0}px ${R ? r : 0}px ${R ? r : 0}px`;
  const fs = Math.max(10, Math.round((h ? thickness : 24) * 0.55));
  const kc = mode === 'outline' ? 'var(--bl-mono-ink)' : mode === 'mono' ? 'var(--bl-knockout)' : 'var(--bl-space)';
  const ko = keylineOffset ?? Math.round(thickness / 2) - 1;
  return (
    <div style={{ ...blFill(mode, color), position: 'relative', width: h ? length : thickness, height: h ? thickness : length, borderRadius: radius, flex: length === 'flex' ? 1 : undefined, display: 'flex', alignItems: 'flex-end', justifyContent: labelAlign === 'start' ? 'flex-start' : labelAlign === 'center' ? 'center' : 'flex-end', boxSizing: 'border-box', padding: `0 ${(L||R) && h ? r : 6}px 2px`, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: fs, lineHeight: 1, textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)', overflow: 'hidden', flexShrink: 0, ...style }}>
      {keyline && <div style={h ? { position: 'absolute', left: L ? r : 0, right: R ? r : 0, top: ko, height: 2, background: kc } : { position: 'absolute', top: L ? r : 0, bottom: R ? r : 0, left: ko, width: 2, background: kc }} />}
      {dividers.map((p, i) => <div key={i} style={h ? { position: 'absolute', top: 0, bottom: 0, left: `${p * 100}%`, width: 3, background: kc } : { position: 'absolute', left: 0, right: 0, top: `${p * 100}%`, height: 3, background: kc }} />)}
      <span style={{ position: 'relative' }}>{label}{children}</span>
    </div>
  );
}
