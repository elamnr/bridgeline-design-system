import React from 'react';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
function rng(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
export function Readout({ rows = 3, cols = 4, seed = 47, digits = [2, 6], colors = ['tan', 'peach', 'violet', 'sky'], size = 14, gapX = 16, mode = 'color', highlight, style }) {
  const rand = rng(seed);
  const data = Array.from({ length: rows }, () => Array.from({ length: cols }, (_, c) => {
    const n = c === 0 ? digits[0] : Math.round(digits[0] + rand() * (digits[1] - digits[0]));
    let s = ''; for (let i = 0; i < n; i++) s += Math.floor(rand() * 10);
    if (n > 4 && rand() > 0.6) s = s.slice(0, 2) + '-' + s.slice(2);
    return s;
  }));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, auto)`, columnGap: gapX, rowGap: 2, justifyContent: 'start', fontFamily: 'var(--bl-font-numeric)', fontVariantNumeric: 'tabular-nums', fontSize: size, lineHeight: 1.1, letterSpacing: '0.04em', ...style }}>
      {data.flatMap((row, ri) => row.map((v, ci) => (
        <div key={ri + '-' + ci} style={{ textAlign: 'right', color: mode !== 'color' ? 'var(--bl-mono-ink)' : highlight && highlight[0] === ri && highlight[1] === ci ? 'var(--bl-bone)' : blColor(colors[ci % colors.length]) }}>{v}</div>
      )))}
    </div>
  );
}
