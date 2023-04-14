import React from 'react';

import { Text } from '../text';

import { TButtonProps } from './types';
import { StyledButton } from './button.styles';

export const Button: React.FC<TButtonProps> = ({
  size = 'M',
  fullWidth = false,
  loading = false,
  variant = 'primary',
  children,
}) => (
  <StyledButton size={size} fullWidth={fullWidth} loading={loading} variant={variant}>
    <Text size={size}>{children}</Text>
  </StyledButton>
);
