import * as React from 'react';
/**
 * Symmetric portrait frame (750×1334 proportions): a top bowl with a pill readout in its notch, a thick header band with code + orange title block, mirrored side arms and bottom elbows, open content well.
 * @startingPoint section="Frames" subtitle="Symmetric 2021 portrait frame — wallpaper / shirt back" viewport="700x400"
 */
export interface SplitFrameProps {
  /** Rendered width in px; height is width × 1334/750. */
  width?: number;
  /** Orange condensed title in the header. */
  title?: React.ReactNode;
  /** Gold sub-lines under the title. */
  lines?: React.ReactNode[];
  /** Dark code set into the left header band. */
  code?: React.ReactNode;
  /** Four values for the notch readout pills. */
  codes?: React.ReactNode[];
  keyline?: boolean;
  mode?: 'color' | 'mono' | 'outline';
  /** Content well (≈ 92% × 54% of the frame). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SplitFrame(props: SplitFrameProps): JSX.Element;
