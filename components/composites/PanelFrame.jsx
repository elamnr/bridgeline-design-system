import React from 'react';
import { Elbow } from '../shapes/Elbow.jsx';
import { SegmentStack } from './SegmentStack.jsx';
const blColor = c => !c ? 'var(--bl-amber)' : /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? c : `var(--bl-${c})`;
const blOn = c => !c || /^(#|rgb|hsl|var|oklch|currentColor|transparent)/.test(c) ? 'var(--bl-text-on-fill)' : `var(--bl-on-${c}, var(--bl-text-on-fill))`;
const blFill = (mode, c) => mode === 'mono' ? { background: 'var(--bl-mono-ink)', color: 'var(--bl-knockout)' } : mode === 'outline' ? { background: 'transparent', boxShadow: 'inset 0 0 0 var(--bl-outline-w) var(--bl-mono-ink)', color: 'var(--bl-mono-ink)' } : { background: blColor(c), color: blOn(c) };
export function PanelFrame({ title, titleColor, color = 'amber', topSegments = [{ color: 'tan', size: 'flex' }, { color: 'lilac', size: 60 }], sideSegments = [{ label: '01-2047', color: 'tan', size: 72 }, { label: '02-0047', color: 'peach', size: 'flex' }, { label: '03', color: 'lilac', size: 48 }], bottom = false, bottomColor, bottomSegments = [{ color: 'peach', size: 'flex' }, { color: 'sky', size: 80 }], arm = 120, bar = 24, gap = 4, width = '100%', height = 420, mode = 'color', keyline = true, children, style }) {
  const eH = bar * 3.2, eW = arm + bar * 2.4;
  const tc = mode === 'color' ? (titleColor ? blColor(titleColor) : 'var(--bl-title)') : 'var(--bl-mono-ink)';
  const row = (segs) => segs.map((s, i) => <div key={i} style={{ ...blFill(mode, s.color), height: bar, width: s.size === 'flex' ? undefined : s.size, flex: s.size === 'flex' ? 1 : '0 0 auto' }} />);
  return (
    <div style={{ width, height, display: 'flex', flexDirection: 'column', gap, boxSizing: 'border-box', ...style }}>
      <div style={{ display: 'flex', gap, alignItems: 'flex-start', height: eH, flexShrink: 0 }}>
        <Elbow corner="tl" width={eW} height={eH} arm={arm} bar={bar} color={color} mode={mode} keyline={keyline} />
        <div style={{ flex: 1, display: 'flex', gap, alignItems: 'flex-start' }}>
          {row(topSegments)}
          {title != null && <div style={{ color: tc, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: Math.round(bar * 1.9), lineHeight: 0.8, marginTop: -2, textTransform: 'uppercase', whiteSpace: 'nowrap', letterSpacing: 'var(--bl-tracking)' }}>{title}</div>}
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', gap: gap * 4, minHeight: 0 }}>
        <SegmentStack segments={sideSegments} thickness={arm} gap={gap} mode={mode} />
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', padding: `${bar * 0.25}px ${bar * 0.5}px 0 0` }}>{children}</div>
      </div>
      {bottom && (
        <div style={{ display: 'flex', gap, alignItems: 'flex-end', height: eH, flexShrink: 0 }}>
          <Elbow corner="bl" width={eW} height={eH} arm={arm} bar={bar} color={bottomColor || color} mode={mode} keyline={keyline} />
          <div style={{ flex: 1, display: 'flex', gap, alignItems: 'flex-end' }}>{row(bottomSegments)}</div>
        </div>
      )}
    </div>
  );
}
