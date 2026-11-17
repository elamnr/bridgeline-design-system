# Artwork bench (UI kit)
Interactive preview of Bridgeline artwork templates across production outputs.
- `index.html` — bench: pick artwork, pick output (full colour / 1-ink screen / engrave wood / engrave metal), edit title + subtitle.
- `ChestPrint.jsx` — 4×4in left-chest frame (400px artboard = 100px/in).
- `BackPanel.jsx` — 12×14in back print (600×700 artboard = 50px/in).
- `Plaque.jsx` — 8×4.75in engraved plaque (640×380).
- `Wallpaper.jsx` — 750×1334 phone wallpaper on SplitFrame (375px artboard).
- `Coaster.jsx` — 4in round coaster (400×400).
- `Bench.jsx` — the console shell (PanelFrame + Button + Readout).
Every artwork takes `{mode, title, sub}`; output surfaces set `--bl-surface / --bl-mono-ink / --bl-knockout` on the wrapper.
This is an original tool UI composed from the design system — there is no pre-existing product it recreates.
