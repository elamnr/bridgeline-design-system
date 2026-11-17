import * as React from 'react';
/** Deterministic grid of right-aligned numeric codes — the "data texture" that fills open panel space. */
export interface ReadoutProps {
  rows?: number;
  cols?: number;
  /** Same seed = same numbers, so artwork is reproducible. */
  seed?: number;
  /** [min, max] digits per cell. */
  digits?: [number, number];
  colors?: string[];
  size?: number;
  gapX?: number;
  mode?: 'color' | 'mono' | 'outline';
  /** [row, col] of a cell to render in bone-white. */
  highlight?: [number, number];
  style?: React.CSSProperties;
}
export declare function Readout(props: ReadoutProps): JSX.Element;
