import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
export function SegmentStack({ segments = [], orientation = 'vertical', thickness = 120, gap = 4, mode = 'color', style }) {
  const v = orientation === 'vertical';
  return (
    <div style={{ display: 'flex', flexDirection: v ? 'column' : 'row', gap, width: v ? thickness : undefined, height: v ? undefined : thickness, ...style }}>
      {segments.map((s, i) => (
        <div key={i} style={{ ...blFill(mode, s.color), [v ? 'height' : 'width']: s.size === 'flex' || s.size == null ? undefined : s.size, flex: s.size === 'flex' ? 1 : '0 0 auto', minHeight: v ? 8 : undefined, minWidth: v ? undefined : 8, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', boxSizing: 'border-box', padding: '0 8px 3px', fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: v ? 15 : Math.max(10, Math.round(thickness * 0.55)), lineHeight: 1, textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)' }}>{s.label}</div>
      ))}
    </div>
  );
}
