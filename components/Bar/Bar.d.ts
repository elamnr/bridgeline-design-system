import * as React from 'react';
/** Straight bar — the basic building block. Square ends or rounded caps, optional inner keyline and cross dividers. */
export interface BarProps {
  /** CSS length, or 'flex' to grow inside a flex row. */
  length?: number | string;
  thickness?: number;
  orientation?: 'horizontal' | 'vertical';
  caps?: 'none' | 'start' | 'end' | 'both';
  /** Palette slot name (amber, tan, lilac, sky…) or any CSS colour. */
  color?: string;
  /** color = full palette; mono = one ink with knockout text; outline = stroked only (engrave/vector). */
  mode?: 'color' | 'mono' | 'outline';
  label?: React.ReactNode;
  labelAlign?: 'start' | 'center' | 'end';
  /** Thin black line running inside the bar, parallel to its length. */
  keyline?: boolean;
  /** px from the top (horizontal) / left (vertical) edge. Default: centre. */
  keylineOffset?: number;
  /** Fractions 0–1 along the length where a 3px black cross-line cuts the bar. */
  dividers?: number[];
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Bar(props: BarProps): JSX.Element;
