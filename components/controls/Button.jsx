import React from 'react';
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const SIZES = { sm: [28, 13, 80], md: [44, 17, 128], lg: [60, 22, 168] };
export function Button({ size = 'md', shape = 'pill', color = 'peach', selected = false, disabled = false, width, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [h, fs, w] = SIZES[size] || SIZES.md;
  const r = h / 2;
  const radius = shape === 'pill' ? r : shape === 'left' ? `${r}px 0 0 ${r}px` : shape === 'right' ? `0 ${r}px ${r}px 0` : 0;
  const bg = disabled ? 'var(--bl-hull)' : selected ? 'var(--bl-bone)' : blColor(color);
  return (
    <button type="button" disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      style={{ appearance: 'none', border: 0, margin: 0, cursor: disabled ? 'default' : 'pointer', background: bg, color: disabled ? 'var(--bl-peach)' : selected ? 'var(--bl-text-on-fill)' : blOn(color), width: width ?? w, height: h, borderRadius: radius, boxSizing: 'border-box', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: `0 ${(shape === 'block' || shape === 'left' ? 10 : r * 0.7) + (selected ? 4 : 0)}px ${Math.round(h * 0.12) + (selected ? 4 : 0)}px`, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: fs, lineHeight: 1, textTransform: 'uppercase', letterSpacing: 'var(--bl-tracking)', boxShadow: selected && !disabled ? 'inset 0 0 0 2px var(--bl-space), inset 0 0 0 4px var(--bl-red)' : 'none', filter: disabled ? 'none' : down ? 'brightness(0.8)' : hover ? 'brightness(1.15)' : 'none', ...style }}>
      {children}
    </button>
  );
}
