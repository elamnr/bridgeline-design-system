import * as React from 'react';
/** Header rule with capped ends and a title set into a gap in the bar. */
export interface TitleBarProps {
  title?: React.ReactNode;
  color?: string;
  /** Title text colour; defaults to --bl-title (orange). */
  titleColor?: string;
  thickness?: number;
  align?: 'left' | 'center' | 'right';
  caps?: boolean;
  mode?: 'color' | 'mono' | 'outline';
  gap?: number;
  style?: React.CSSProperties;
}
export declare function TitleBar(props: TitleBarProps): JSX.Element;
