Complete elbow frame (header bar + title, sidebar column, content well, optional bottom elbow) — the default container for any composition.
```jsx
<PanelFrame title="Engineering" color="amber" bottom height={480}>
  <Readout rows={10} cols={6} />
</PanelFrame>
```
- Customise `topSegments`, `sideSegments`, `bottomSegments` ({label,color,size}). `mode` cascades to every shape.
