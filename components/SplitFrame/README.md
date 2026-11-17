Symmetric portrait frame of the 2021 style — phone wallpapers, shirt backs, posters; pair with a wide light headline inside.
```jsx
<SplitFrame width={375} title="Status portal" lines={['Crew quarters 04','Log 2047.3']}>
  <div style={{ font: 'var(--bl-type-headline)', color: 'var(--bl-peach)' }}>ENCRYPTED</div>
</SplitFrame>
```
- Scales by `width`; children are not scaled — size them for the width you pick. `mode` cascades.
