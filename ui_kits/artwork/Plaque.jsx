const { PanelFrame, Readout, SegmentStack, TitleBar, Button, Bar, Elbow, Pill } = window.BridgelineDesignSystem_9b57ee;

function Plaque({ mode, title, sub }) {
  const ink = mode === 'color' ? 'var(--bl-title)' : 'var(--bl-mono-ink)';
  return (
    <div style={{ width: 640, height: 380, padding: 22, boxSizing: 'border-box', display: 'flex', gap: 4 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Elbow mode={mode} corner="tl" width={150} height={80} arm={90} bar={22} color="amber" label="01" />
        <SegmentStack mode={mode} thickness={90} style={{ flex: 1 }} segments={[{ label: '22', color: 'tan', size: 'flex' }, { label: '03-41', color: 'peach', size: 50 }]} />
        <Elbow mode={mode} corner="bl" width={150} height={80} arm={90} bar={22} color="lilac" label="02" />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Bar mode={mode} thickness={22} caps="end" color="tan" />
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ color: ink, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: 64, lineHeight: 0.88, textTransform: 'uppercase' }}>{title}</div>
          <div style={{ color: mode === 'color' ? 'var(--bl-lilac)' : ink, fontFamily: 'var(--bl-font-display)', fontSize: 22, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{sub}</div>
          <Readout mode={mode} rows={2} cols={6} seed={12} size={14} />
        </div>
        <Bar mode={mode} thickness={22} caps="end" color="lilac" />
      </div>
    </div>
  );
}
window.Plaque = Plaque;
