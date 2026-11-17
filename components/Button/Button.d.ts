import * as React from 'react';
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
