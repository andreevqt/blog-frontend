import { ReactNode } from 'react';

export type THtmlTypes = 'button' | 'submit' | 'reset';

export type TButtonSizes = 'S' | 'M' | 'L';

export type TButtonVariant = 'primary' | 'secondary';

export type TButtonProps = {
  size?: TButtonSizes;
  variant?: TButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  children?: ReactNode;
};
