import * as React from 'react';
import { Segment } from './SegmentStack';
/**
 * Full console frame: top-left elbow, segmented header bar with title, labelled sidebar column, content well, optional bottom elbow.
 * @startingPoint section="Frames" subtitle="Elbow frame with sidebar and title" viewport="700x420"
 */
export interface PanelFrameProps {
  title?: React.ReactNode;
  titleColor?: string;
  color?: string;
  topSegments?: Segment[];
  sideSegments?: Segment[];
  bottom?: boolean;
  bottomColor?: string;
  bottomSegments?: Segment[];
  arm?: number;
  bar?: number;
  gap?: number;
  width?: number | string;
  height?: number | string;
  mode?: 'color' | 'mono' | 'outline';
  /** Inner keyline on the elbows (default true). */
  keyline?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PanelFrame(props: PanelFrameProps): JSX.Element;
