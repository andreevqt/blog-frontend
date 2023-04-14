import { ReactNode } from 'react';

export type TTextVariant = 'primary' | 'default' | 'success' | 'warning' | 'danger';

export type TTextType = 'heading' | 'regular';

export type TTextSize = 'S' | 'M' | 'L';

export type TTextProps = {
  variant?: TTextVariant;
  type?: TTextType;
  size?: TTextSize;
  children?: ReactNode;
};
