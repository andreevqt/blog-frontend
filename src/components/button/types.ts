import { ReactNode, SyntheticEvent } from 'react';

export type THtmlTypes = 'button' | 'submit' | 'reset';

export type TButtonSizes = 'S' | 'M' | 'L';

export type TButtonVariant = 'primary' | 'secondary';

export type TButtonProps = {
  iconStart?: React.ReactNode;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  to?: string;
  type?: THtmlTypes;
  size?: TButtonSizes;
  variant?: TButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
};
