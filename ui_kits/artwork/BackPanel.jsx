const { PanelFrame, Readout, SegmentStack, TitleBar, Button, Bar, Elbow, Pill } = window.BridgelineDesignSystem_9b57ee;

function BackPanel({ mode, title, sub }) {
  return (
    <div style={{ width: 600, height: 700, padding: 24, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TitleBar mode={mode} title={title} color="amber" thickness={40} align="left" />
      <PanelFrame mode={mode} title={sub} color="lilac" arm={140} bar={26} height={460} bottom bottomColor="peach"
        topSegments={[{ color: 'violet', size: 'flex' }, { color: 'sky', size: 70 }, { color: 'lilac', size: 30 }]}
        sideSegments={[{ label: '01-0412', color: 'violet', size: 90 }, { label: '02-7731', color: 'sky', size: 40 }, { label: '03', color: 'lilac', size: 'flex' }]}
        bottomSegments={[{ color: 'tan', size: 'flex' }, { color: 'amber', size: 110 }]}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Readout mode={mode} rows={4} cols={4} seed={77} size={17} colors={['sky', 'tan', 'peach', 'violet']} />
          <div style={{ display: 'flex', gap: 4 }}>
            <Pill mode={mode} shape="left" color="peach" label="Aux" />
            <Pill mode={mode} shape="block" color="tan" label="03-88" />
            <Pill mode={mode} shape="right" color="amber" label="Main" />
          </div>
        </div>
      </PanelFrame>
      <div style={{ display: 'flex', gap: 4 }}>
        <Bar mode={mode} length={90} thickness={22} caps="start" color="peach" />
        <Bar mode={mode} length="flex" thickness={22} color="tan" label="Section 31-B" />
        <Bar mode={mode} length={60} thickness={22} caps="end" color="lilac" />
      </div>
    </div>
  );
}
window.BackPanel = BackPanel;
