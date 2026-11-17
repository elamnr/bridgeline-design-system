import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
export function TitleBar({ title, color = 'amber', titleColor, thickness = 24, align = 'right', caps = true, mode = 'color', gap = 4, style }) {
  const r = thickness / 2;
  const tc = mode === 'color' ? (titleColor ? blColor(titleColor) : 'var(--bl-title)') : 'var(--bl-mono-ink)';
  const cap = side => <div style={{ ...blFill(mode, color), width: thickness * 1.25, height: thickness, borderRadius: side === 'l' ? `${r}px 0 0 ${r}px` : `0 ${r}px ${r}px 0`, flexShrink: 0 }} />;
  const fill = <div style={{ ...blFill(mode, color), flex: 1, height: thickness, minWidth: thickness }} />;
  const text = <div style={{ color: tc, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: Math.round(thickness * 1.5), lineHeight: `${thickness}px`, height: thickness, display: 'flex', alignItems: 'center', textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)', whiteSpace: 'nowrap', padding: '0 2px' }}>{title}</div>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap, width: '100%', ...style }}>
      {caps && cap('l')}
      {align === 'left' ? <>{text}{fill}</> : align === 'center' ? <>{fill}{text}{fill}</> : <>{fill}{text}</>}
      {caps && cap('r')}
    </div>
  );
}
