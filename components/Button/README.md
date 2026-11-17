Interactive console button (capsule or block, label bottom-right) — for on-screen tools and kiosk/prototype UIs; use Pill for static artwork.
```jsx
<Button color="lilac" onClick={go}>Engage</Button>
<Button shape="block" selected>Mono</Button>
```
- States: hover brightness 1.15, press 0.8, `selected` = bone fill + inset black/red ring, `disabled` = hull fill + lilac text.
