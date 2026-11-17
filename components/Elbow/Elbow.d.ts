import * as React from 'react';
/**
 * The signature corner: a vertical arm sweeping into a horizontal bar with a large outer radius and a tight inner radius.
 * @startingPoint section="Shapes" subtitle="Corner elbow — the signature frame shape" viewport="700x300"
 */
export interface ElbowProps {
  corner?: 'tl' | 'tr' | 'bl' | 'br';
  width?: number;
  height?: number;
  /** Width of the vertical arm. */
  arm?: number;
  /** Thickness of the horizontal bar. */
  bar?: number;
  outerRadius?: number;
  innerRadius?: number;
  color?: string;
  mode?: 'color' | 'mono' | 'outline';
  label?: React.ReactNode;
  /** Thin black line following the outer curve inside the shape. */
  keyline?: boolean;
  /** Distance of the keyline from the outer edge (px). Default: half the thinner limb. */
  keylineOffset?: number;
  style?: React.CSSProperties;
}
export declare function Elbow(props: ElbowProps): JSX.Element;
