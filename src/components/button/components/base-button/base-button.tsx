import React from 'react';
import { Link } from 'react-router-dom';

import { TBaseButtonProps } from './types';
import { StyledIcon, StyledOverlay } from './base-button.styles';

export const BaseButton: React.FC<TBaseButtonProps> = ({
  onClick,
  type = 'button',
  children,
  iconStart,
  className = '',
  loading = false,
  to,
}) =>
  to ? (
    <Link to={to} className={className}>
      {iconStart && <StyledIcon>{iconStart}</StyledIcon>}
      {children}
      {loading && <StyledOverlay />}
    </Link>
  ) : (
    <button type={type} className={className} onClick={onClick}>
      {iconStart && <StyledIcon>{iconStart}</StyledIcon>}
      {children}
      {loading && <StyledOverlay />}
    </button>
  );
