import * as React from 'react';
export interface Segment { label?: React.ReactNode; color?: string; /** px, or 'flex' to absorb remaining space. */ size?: number | 'flex'; }
/** A run of blocks separated by seams — the sidebar column or a segmented header bar. */
export interface SegmentStackProps {
  segments?: Segment[];
  orientation?: 'vertical' | 'horizontal';
  /** Column width (vertical) or bar height (horizontal). */
  thickness?: number;
  gap?: number;
  mode?: 'color' | 'mono' | 'outline';
  style?: React.CSSProperties;
}
export declare function SegmentStack(props: SegmentStackProps): JSX.Element;
