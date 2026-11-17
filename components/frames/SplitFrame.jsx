import React from 'react';
import { Elbow } from '../shapes/Elbow.jsx';
import { Bar } from '../shapes/Bar.jsx';
import { Pill } from '../shapes/Pill.jsx';
export function SplitFrame({ width = 375, title = 'Status portal', lines = [], code = '4137-47', codes = ['91', '44612', '72', '42'], keyline = true, mode = 'color', children, style }) {
  const u = width / 750, s = v => Math.round(v * u * 10) / 10;
  const blk = mode === 'color' ? 'var(--bl-space)' : 'var(--bl-surface)';
  const ink = mode === 'color' ? null : 'var(--bl-mono-ink)';
  const at = (x, y, extra) => ({ position: 'absolute', left: s(x), top: s(y), ...extra });
  const cond = { fontFamily: 'var(--bl-font-display)', fontWeight: 500, textTransform: 'uppercase', lineHeight: 1, letterSpacing: 'var(--bl-tracking)' };
  const big = { arm: s(30), mode };
  return (
    <div style={{ position: 'relative', width, height: s(1334), overflow: 'hidden', background: mode === 'color' ? 'var(--bl-space)' : 'var(--bl-surface)', ...style }}>
      <Elbow {...big} style={at(0, 66)} corner="bl" width={s(155)} height={s(374)} bar={s(34)} outerRadius={s(150)} innerRadius={s(118)} color="tan" keyline={keyline} keylineOffset={s(14)} />
      <Bar mode={mode} style={at(160, 406)} length={s(52)} thickness={s(34)} color="tan" />
      <Bar mode={mode} style={at(218, 406)} length={s(330)} thickness={s(34)} color="amber" />
      <Elbow {...big} style={at(532, 66)} corner="br" width={s(218)} height={s(374)} bar={s(34)} outerRadius={s(150)} innerRadius={s(118)} color="amber" />
      <div style={at(0, 110, { width: s(30), height: s(5), background: blk })} />
      {[110, 262].map(y => <div key={y} style={at(720, y, { width: s(30), height: s(5), background: blk })} />)}
      <div style={at(305, 380, { width: s(285), height: s(52), borderRadius: s(26), background: blk, display: 'flex', alignItems: 'center', gap: s(6), padding: `0 ${s(17)}px`, boxSizing: 'border-box' })}>
        <Pill mode={mode} align="center" shape="left" width={s(48)} height={s(28)} color="peach" label={codes[0]} style={{ fontWeight: 400 }} />
        <Pill mode={mode} shape="block" width={s(112)} height={s(28)} color="lilac" label={codes[1]} style={{ fontWeight: 400 }} />
        <Pill mode={mode} align="center" shape="block" width={s(28)} height={s(28)} color="rust" label={codes[2]} style={{ fontWeight: 400 }} />
        <Pill mode={mode} align="center" shape="right" width={s(46)} height={s(28)} color="peach" label={codes[3]} style={{ fontWeight: 400 }} />
      </div>
      <Elbow {...big} style={at(0, 456)} corner="tl" width={s(305)} height={s(332)} bar={s(120)} outerRadius={s(150)} innerRadius={s(100)} color="amber" keyline={keyline} keylineOffset={s(15)} />
      <div style={at(140, 500, { ...cond, width: s(155), height: s(66), display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', fontSize: s(30), color: mode === 'color' ? 'var(--bl-on-amber, #000)' : mode === 'mono' ? 'var(--bl-knockout)' : ink })}>{code}</div>
      <Bar mode={mode} style={at(309, 456)} orientation="vertical" length={s(120)} thickness={s(14)} color="amber" />
      <Bar mode={mode} style={at(330, 456)} orientation="vertical" length={s(120)} thickness={s(32)} color="tan" />
      <div style={at(376, 462, { width: s(205), display: 'flex', flexDirection: 'column', gap: s(8) })}>
        <div style={{ ...cond, fontSize: s(44), color: ink || 'var(--bl-title)', whiteSpace: 'nowrap' }}>{title}</div>
        {lines.map((l, i) => <div key={i} style={{ ...cond, fontSize: s(20), color: ink || 'var(--bl-sunflower)', whiteSpace: 'nowrap' }}>{l}</div>)}
      </div>
      <Elbow {...big} style={at(586, 456)} corner="tr" width={s(164)} height={s(332)} bar={s(120)} outerRadius={s(150)} innerRadius={s(100)} color="lilac" keyline={keyline} keylineOffset={s(15)} />
      <Bar mode={mode} style={at(0, 796)} orientation="vertical" length={s(306)} thickness={s(30)} color="tan" dividers={[0.84, 0.88]} />
      <Elbow {...big} style={at(0, 1106)} corner="bl" width={s(218)} height={s(228)} bar={s(28)} outerRadius={s(110)} innerRadius={s(80)} color="tan" />
      <Bar mode={mode} style={at(720, 796)} orientation="vertical" length={s(306)} thickness={s(30)} color="lilac" />
      <Elbow {...big} style={at(530, 1106)} corner="br" width={s(220)} height={s(228)} bar={s(28)} outerRadius={s(110)} innerRadius={s(80)} color="lilac" />
      <div style={at(30, 590, { width: s(690), height: s(716), boxSizing: 'border-box', overflow: 'hidden' })}>{children}</div>
    </div>
  );
}
