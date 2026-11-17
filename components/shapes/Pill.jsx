import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
const SIZES = { sm: [72, 24, 12], md: [120, 40, 16], lg: [168, 56, 20] };
export function Pill({ size = 'md', width, height, color = 'peach', mode = 'color', label, shape = 'pill', align = 'end', style }) {
  const [w, h0, fs0] = SIZES[size] || SIZES.md;
  const h = height ?? h0, fs = height ? Math.round(height * 0.62) : fs0;
  const r = h / 2;
  const radius = shape === 'pill' ? r : shape === 'left' ? `${r}px 0 0 ${r}px` : shape === 'right' ? `0 ${r}px ${r}px 0` : 0;
  return (
    <div style={{ ...blFill(mode, color), width: width ?? w, height: h, borderRadius: radius, boxSizing: 'border-box', display: 'flex', alignItems: align === 'center' ? 'center' : 'flex-end', justifyContent: align === 'center' ? 'center' : 'flex-end', padding: align === 'center' ? 0 : `0 ${shape === 'block' || shape === 'left' ? 8 : r * 0.7}px ${Math.round(h * 0.12)}px`, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: fs, lineHeight: 1, textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)', flexShrink: 0, ...style }}>{label}</div>
  );
}
