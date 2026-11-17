const { PanelFrame, Readout, SegmentStack, TitleBar, Button, Bar, Elbow, Pill } = window.BridgelineDesignSystem_9b57ee;

const ARTWORKS = [
  { id: 'chest', name: 'Chest print', size: '4 × 4 in', comp: 'ChestPrint', title: 'Engineering', sub: 'Deck 04' },
  { id: 'back', name: 'Back panel', size: '12 × 14 in', comp: 'BackPanel', title: 'Night shift', sub: 'Ops' },
  { id: 'plaque', name: 'Plaque', size: '8 × 4.75 in', comp: 'Plaque', title: 'Chief engineer', sub: 'Twenty years of service' },
  { id: 'wallpaper', name: 'Phone wallpaper', size: '750 × 1334 px', comp: 'Wallpaper', title: 'Bridgeline command', sub: 'Encrypted' },
  { id: 'coaster', name: 'Coaster', size: '4 in round', comp: 'Coaster', title: 'Galley', sub: 'Refuel station' },
];
const SURFACES = {
  color: { label: 'Full colour', vars: { '--bl-surface': '#0d0d10' }, mode: 'color' },
  screen: { label: 'Screen · 1 ink', vars: { '--bl-surface': 'var(--bl-hull)', '--bl-mono-ink': 'var(--bl-amber)', '--bl-knockout': 'var(--bl-hull)' }, mode: 'mono' },
  wood: { label: 'Engrave · wood', vars: { '--bl-surface': 'var(--engrave-wood)', '--bl-mono-ink': 'var(--engrave-wood-mark)', '--bl-knockout': 'var(--engrave-wood)', '--bl-outline-w': '1.5px' }, mode: 'outline' },
  anodized: { label: 'Engrave · metal', vars: { '--bl-surface': 'var(--engrave-anodized)', '--bl-mono-ink': 'var(--engrave-anodized-mark)', '--bl-knockout': 'var(--engrave-anodized)' }, mode: 'mono' },
};
function Bench() {
  const [art, setArt] = React.useState(() => localStorage.getItem('bl-art') || 'chest');
  const [surf, setSurf] = React.useState('color');
  const [theme, setTheme] = React.useState(() => localStorage.getItem('bl-theme2') || 'default');
  React.useEffect(() => localStorage.setItem('bl-theme2', theme), [theme]);
  const [texts, setTexts] = React.useState({});
  React.useEffect(() => localStorage.setItem('bl-art', art), [art]);
  const a = ARTWORKS.find(x => x.id === art);
  const t = texts[art] || { title: a.title, sub: a.sub };
  const setT = (k, v) => setTexts(s => ({ ...s, [art]: { ...t, [k]: v } }));
  const S = SURFACES[surf];
  const Art = window[a.comp];
  const wellRef = React.useRef(null), artRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const fit = () => { const w = wellRef.current, el = artRef.current; if (!w || !el) return; setScale(Math.min(w.clientWidth / el.offsetWidth, w.clientHeight / el.offsetHeight, 1)); };
    fit(); const ro = new ResizeObserver(fit); ro.observe(wellRef.current); return () => ro.disconnect();
  }, [art]);
  const input = { background: '#000', border: 0, borderBottom: '2px solid var(--bl-amber)', color: 'var(--bl-title)', fontFamily: 'var(--bl-font-display)', fontSize: 20, textTransform: 'uppercase', padding: '4px 2px', outline: 'none', width: '100%' };
  const lab = { fontSize: 12, color: 'var(--bl-peach)', marginBottom: 6 };
  return (
    <div data-bl-theme={theme === 'default' ? undefined : theme} style={{ height: '100vh', padding: 16, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <PanelFrame title="Artwork bench" color="amber" height="100%" arm={150} bar={24} bottom bottomColor="lilac"
        topSegments={[{ color: 'tan', size: 'flex' }, { color: 'peach', size: 80 }, { color: 'lilac', size: 40 }]}
        sideSegments={[{ label: a.size, color: 'tan', size: 60 }, { label: '02-' + art.length + '47', color: 'peach', size: 'flex' }, { label: surf, color: 'lilac', size: 44 }]}
        bottomSegments={[{ color: 'sky', size: 'flex' }, { color: 'violet', size: 120 }]}>
        <div style={{ display: 'flex', gap: 28, height: '100%', minHeight: 0 }}>
          <div style={{ width: 230, display: 'flex', flexDirection: 'column', gap: 22, flexShrink: 0, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'thin', paddingRight: 8 }}>
            <div><div style={lab}>Artwork</div><div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {ARTWORKS.map((x, i) => <Button key={x.id} width="100%" shape={i === 0 ? 'right' : 'block'} size="sm" color={['peach', 'amber', 'tan', 'violet', 'sky'][i]} selected={x.id === art} onClick={() => setArt(x.id)}>{x.name}</Button>)}
            </div></div>
            <div><div style={lab}>Output</div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {Object.entries(SURFACES).map(([k, v]) => <Button key={k} width="100%" shape="block" size="sm" color="violet" selected={k === surf} onClick={() => setSurf(k)}>{v.label}</Button>)}
            </div></div>
            <div><div style={lab}>Theme</div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {['default', 'padd', 'nebula', 'classic'].map((k, i) => <Button key={k} width="100%" shape="block" size="sm" color="sky" selected={k === theme} onClick={() => setTheme(k)}>{k}</Button>)}
            </div></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div><div style={lab}>Title</div><input style={input} value={t.title} onChange={e => setT('title', e.target.value)} /></div>
              <div><div style={lab}>Subtitle</div><input style={input} value={t.sub} onChange={e => setT('sub', e.target.value)} /></div>
            </div>
            <Readout rows={4} cols={4} seed={art.length * 31 + surf.length} size={13} />
          </div>
          <div ref={wellRef} style={{ flex: 1, minWidth: 0, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div ref={artRef} style={{ ...S.vars, background: 'var(--bl-surface)', padding: 20, transform: `scale(${scale})`, transformOrigin: 'center', flexShrink: 0 }}>
              <Art mode={S.mode} title={t.title} sub={t.sub} />
            </div>
          </div>
        </div>
      </PanelFrame>
    </div>
  );
}
window.Bench = Bench;
