import * as React from 'react';
/** Static capsule/block graphic with a bottom-right label. For interactive use see Button. */
export interface PillProps {
  size?: 'sm' | 'md' | 'lg';
  width?: number | string;
  /** Explicit height in px (overrides size; font scales with it). */
  height?: number;
  /** end = label bottom-right (default); center = centred (readout pills). */
  align?: 'end' | 'center';
  color?: string;
  mode?: 'color' | 'mono' | 'outline';
  label?: React.ReactNode;
  /** pill = both ends round, left/right = one end round, block = square. */
  shape?: 'pill' | 'left' | 'right' | 'block';
  style?: React.CSSProperties;
}
export declare function Pill(props: PillProps): JSX.Element;
