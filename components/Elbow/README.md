Corner elbow (arm + bar, big outer radius, smaller inner radius) — the anchor of every frame; one per corner you want to turn.
```jsx
<Elbow corner="tl" width={300} height={330} arm={30} bar={120} outerRadius={150} innerRadius={100} color="amber" keyline />
```
- `corner` tl | tr | bl | br. `keyline` adds the thin inner line of the 2021 style. SVG path, so `mode="outline"` gives a clean vector for engraving.
