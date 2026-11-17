Seeded grid of numeric codes, column-coloured — fills empty panel space with believable data texture.
```jsx
<Readout rows={8} cols={6} seed={2047} colors={['tan','sky','lilac']} />
```
- Change `seed` for new numbers; output is deterministic so print files are reproducible.
- Use sparingly: the style favours open black space. Defaults are 3×4; keep grids small and off to one side.
