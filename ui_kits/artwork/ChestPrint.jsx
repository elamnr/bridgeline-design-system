const { PanelFrame, Readout, SegmentStack, TitleBar, Button, Bar, Elbow, Pill } = window.BridgelineDesignSystem_9b57ee;

function ChestPrint({ mode, title, sub }) {
  return (
    <div style={{ width: 400, height: 400, padding: 16, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <PanelFrame mode={mode} title={sub} color="amber" arm={88} bar={18} height={300}
        topSegments={[{ color: 'tan', size: 'flex' }, { color: 'lilac', size: 36 }]}
        sideSegments={[{ label: '04', color: 'tan', size: 56 }, { label: '22-01', color: 'peach', size: 'flex' }, { label: '47', color: 'lilac', size: 34 }]}>
        <Readout mode={mode} rows={4} cols={3} seed={404} size={14} gapX={12} />
      </PanelFrame>
      <TitleBar mode={mode} title={title} color="lilac" thickness={26} />
    </div>
  );
}
window.ChestPrint = ChestPrint;
