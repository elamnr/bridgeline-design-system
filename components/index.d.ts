import * as React from 'react';

// PanelFrame
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

// Readout
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

// SegmentStack
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

// TitleBar
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

// Button
/**
 * Interactive capsule/block button. Label sits bottom-right; hover brightens, press darkens, selected turns bone-white with an inset accent ring (stays distinct when themes map fills near-white).
 * @startingPoint section="Controls" subtitle="Capsule button cluster" viewport="700x220"
 */
export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  shape?: 'pill' | 'left' | 'right' | 'block';
  color?: string;
  selected?: boolean;
  disabled?: boolean;
  width?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

// SplitFrame
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

// Bar
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

// Elbow
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

// Pill
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
