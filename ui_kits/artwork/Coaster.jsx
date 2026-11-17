const { PanelFrame, Readout, SegmentStack, TitleBar, Button, Bar, Elbow, Pill } = window.BridgelineDesignSystem_9b57ee;

function Coaster({ mode, title, sub }) {
  const ink = mode === 'color' ? 'var(--bl-title)' : 'var(--bl-mono-ink)';
  return (
    <div style={{ width: 400, height: 400, padding: 10, boxSizing: 'border-box' }}>
      <div style={{ width: 380, height: 380, borderRadius: '50%', boxShadow: 'inset 0 0 0 3px ' + ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 270, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
            <Elbow mode={mode} corner="tl" width={96} height={60} arm={56} bar={16} color="amber" />
            <Bar mode={mode} length="flex" thickness={16} caps="end" color="tan" />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <SegmentStack mode={mode} thickness={56} segments={[{ label: '04', color: 'peach', size: 40 }, { color: 'lilac', size: 20 }]} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ color: ink, fontFamily: 'var(--bl-font-display)', fontWeight: 500, fontSize: 40, lineHeight: 0.88, textTransform: 'uppercase' }}>{title}</div>
              <div style={{ color: mode === 'color' ? 'var(--bl-sky)' : ink, fontFamily: 'var(--bl-font-display)', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sub}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
            <Elbow mode={mode} corner="bl" width={96} height={60} arm={56} bar={16} color="lilac" />
            <Bar mode={mode} length="flex" thickness={16} caps="end" color="sky" />
          </div>
        </div>
      </div>
    </div>
  );
}
window.Coaster = Coaster;
