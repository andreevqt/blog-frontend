import React from 'react';
import styled, { css } from 'styled-components';

import { alpha } from '../../theme/helpers/alpha';
import { Spacing } from '../../theme/theme';
import { Text } from '../text';

import { TButtonProps, TButtonSizes, TButtonVariant } from './types';
import { BaseButton, StyledOverlay } from './components/base-button';

export const getButtonSize = (size?: TButtonSizes) => {
  switch (size) {
    case 'M': {
      return `
        padding: ${Spacing.XXS} ${Spacing.L};
      `;
    }
    default:
      return `
        padding: ${Spacing.XS} ${Spacing.XXL};
      `;
  }
};

export const getButtonVariant = (variant?: TButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return css`
        ${(props) => `
          background-color: ${props.theme.primary.base};
          border: 1px solid ${props.theme.primary.base};
          &:focus {
            box-shadow: 0 0 0 3.2px ${alpha(props.theme.primary.base, 0.5)};
          }
          &:hover {
            background-color: ${props.theme.primary.light};
            border-color: ${props.theme.primary.light};
          }
          ${Text} {
            color: ${props.theme.background.base};
          }
          ${StyledOverlay} {
            background-color: ${props.theme.primary.base};
          }
        `}
      `;
    }
    case 'secondary': {
      return css`
        ${(props) => `
          background-color: ${props.theme.secondary.base};
          border:1px solid ${props.theme.secondary.base};
          color: ${props.theme.body.base};
          &:focus {
            box-shadow: 0 0 0 3.2px ${alpha(props.theme.secondary.base, 0.5)};
          }
          &:hover {
            background-color: ${props.theme.secondary.lightest};
            border-color: ${props.theme.secondary.lightest};
          }
          ${Text} {
            color: ${props.theme.body.base};
          }
          ${StyledOverlay} {
            background-color: ${props.theme.secondary.base};
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
  ${(props) => css`
    position: relative;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.4px;
    width: ${props.fullWidth ? '100%' : 'auto'};
    pointer-events: ${props.loading ? 'none' : 'auto'};
    cursor: ${props.loading ? 'none' : 'pointer'};
    ${getButtonSize(props.size)};
    ${getButtonVariant(props.variant)};

    ${Text} {
      font-weight: 500;
    }
  `}
`;
