const { SplitFrame } = window.BridgelineDesignSystem_9b57ee;
function Wallpaper({ mode, title, sub }) {
  const c = k => mode === 'color' ? `var(--bl-${k})` : 'var(--bl-mono-ink)';
  const wide = { fontFamily: 'var(--bl-font-wide)', fontWeight: 300, textTransform: 'uppercase', lineHeight: 1 };
  return (
    <SplitFrame mode={mode} width={375} title="Status portal" lines={['Crew quarters 04', 'Log 2047.3']}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '36px 20px 0', boxSizing: 'border-box' }}>
        <div style={{ ...wide, fontSize: 30, color: c('peach') }}>{sub}</div>
        <div style={{ ...wide, fontSize: 14, color: c('violet'), marginTop: 2 }}>Communication</div>
        <div style={{ flex: 1 }}></div>
        <div style={{ ...wide, fontSize: 28, color: c('peach'), textAlign: 'center' }}>{title}</div>
        <div style={{ ...wide, fontSize: 8.5, color: c('violet'), textAlign: 'center', lineHeight: 1.7, marginTop: 10, letterSpacing: '0.02em' }}>Bridgeline • Deck 04 • Section 31-B<br />Night shift • Engineering • Bay 7</div>
        <div style={{ height: 64 }}></div>
      </div>
    </SplitFrame>
  );
}
window.Wallpaper = Wallpaper;
