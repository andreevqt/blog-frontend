import React from 'react';
import styled, { css } from 'styled-components';

import { alpha } from '../../theme/helpers/alpha';
import { Spacing } from '../../theme/theme';
import { TTheme } from '../../theme';

import { TButtonProps, TButtonSizes, TButtonVariant } from './types';
import { BaseButton, StyledOverlay } from './components/base-button';

export const getButtonSize = (size?: TButtonSizes) => {
  switch (size) {
    case 'M': {
      return css`
        padding: ${Spacing.XXS} ${Spacing.L};
      `;
    }
    default:
      return css``;
  }
};

export const getButtonVariant = (variant?: TButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return css<TTheme>`
        ${(theme) => `
          background-color: ${theme.primary.base};
          border: 1px solid ${theme.primary.base};
          color: ${theme.background.base};
          &:focus {
            box-shadow: 0 0 0 3.2px ${alpha(theme.primary.base, 0.5)};
          }
          &:hover {
            background-color: ${theme.primary.light};
            border-color: ${theme.primary.light};
          }
          ${StyledOverlay} {
            background-color: ${theme.primary.base};
          }
        `}
      `;
    }
    case 'secondary': {
      return css<TTheme>`
        ${(theme) => `
          background-color: ${theme.secondary.base};
          border:1px solid ${theme.secondary.base};
          color: ${theme.body.base};
          &:focus {
            box-shadow: 0 0 0 3.2px ${alpha(theme.secondary.base, 0.5)};
          }
          &:hover {
            background-color: ${theme.secondary.lightest};
            border-color: ${theme.secondary.lightest};
          }
          ${StyledOverlay} {
            background-color: ${theme.secondary.base};
          }
        `}
      `;
    }
    default: {
      return css``;
    }
  }
};

type TStyledButtonProps = TButtonProps;

export const StyledButton = styled(BaseButton)<TStyledButtonProps>`
  ${(props) => `
    padding: ${Spacing.XS} ${Spacing.XXL};
    position: relative;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease;
    font-weight: 500;
    line-height: 1;
    letter-spacing: .4px;
    width: ${props.fullWidth ? '100%' : 'auto'};
    ${props.loading && `pointer-events: none;`}
    ${getButtonSize(props.size)}
    ${getButtonVariant(props.variant)}
  `}
`;
