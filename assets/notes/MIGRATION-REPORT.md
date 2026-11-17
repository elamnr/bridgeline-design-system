# Move report: `Bridgeline Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Bridgeline Design System` — a design-system project (namespace `BridgelineDesignSystem_9b57ee`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 9 components (2 with a card in the project); 0 starter template(s) kept aside; 79 files in the system’s table (482 KB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `1 extra section(s): ui_kits/artwork/README.md`
- `62 files outside the layout, kept as is (listed under Claude’s context, no section of their own): components/composites/PanelFrame.jsx, components/composites/PanelFrame.prompt.md, components/composites/Readout.jsx, components/composites/Readout.prompt.md, components/composites/SegmentStack.jsx, components/composites/SegmentStack.prompt.md, components/composites/TitleBar.jsx, components/composites/TitleBar.prompt.md, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 1 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (the move writes no components/bundle.js and no components/bundle.css: a page of the project loads the bundle and the stylesheets it links, as it did before the move)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- the move writes no components/bundle.css: the system’s stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/print.css`, `tokens/base.css` are carried as written, at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/print.css`, `project/tokens/base.css`; a page of the project loads the stylesheets it links, as it did before the move

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `PanelFrame` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Readout` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SegmentStack` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TitleBar` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Button` | ✓ | ✓ | a card in the project | ✓ |
| `SplitFrame` | ✓ | ✓ | a card in the project | ✓ |
| `Bar` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Elbow` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Pill` | ✓ | ✓ | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (76 files; the map lists every one):
- 23 × foundations page
- 10 × kit piece
- 9 × component types
- 9 × component source
- 9 × component guide
- 7 × global stylesheet
- 2 × showcase page
- 2 × component card
- 2 × image
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output

## Kept aside

Nothing.

## Dropped

Nothing.
