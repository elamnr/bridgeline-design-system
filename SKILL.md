---
name: bridgeline-design
description: Use when creating artwork, mockups or UI in the Bridgeline style (console-display-inspired artwork for shirts, merch and laser engraving). Covers brand rules, tokens, components and production modes.
---

# Bridgeline Design System

This repository is a read-only published copy. The source of truth is maintained elsewhere and republished here; do not edit these files.

1. Pull the latest version before use (`git pull`).
2. Read `README.md` first: content rules, visual foundations, iconography, fonts.
3. Tokens: `tokens.json` (data; four themes: default, padd, nebula, classic). `tokens.css` is the compiled CSS custom properties; set `data-theme="<id>"` on `<html>` to switch themes.
4. Styles: load `tokens.css`, then `components/bundle.css` (or `styles.css`, which imports both).
5. Components: load React 18 and ReactDOM 18 (UMD), then `components/bundle.js`; components are on `window.BridgelineDesignSystem_9b57ee` (Elbow, Bar, Pill, Button, SplitFrame, PanelFrame, TitleBar, SegmentStack, Readout).
6. Per component: `components/<Name>/README.md` (usage), `components/<Name>/<Name>.d.ts` (props), `components/<Name>/preview.html` (example). `components/index.d.ts` collects all props.
7. Production modes: wrap artwork in `data-bl-mode="screen"` or `data-bl-mode="engrave"` and pass `mode="mono"` or `mode="outline"` to components.

Never reproduce franchise logos, insignia, ship names or trademarked names in derived artwork.
