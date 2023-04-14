import { ReactNode, SyntheticEvent } from 'react';

import { THtmlTypes } from '../../types';

export type TBaseButtonProps = {
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  type?: THtmlTypes;
  iconStart?: ReactNode;
  className?: string;
  loading?: boolean;
  to?: string;
  children?: ReactNode;
};
