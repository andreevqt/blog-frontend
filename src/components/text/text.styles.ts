import styled, { css } from 'styled-components';

import { Font } from '../../theme/theme';

import { TTextProps } from './types';

type TStyledTextProps = TTextProps;

type TGetDefaultAttrsParams = Omit<TStyledTextProps, 'variant'>;

const regularMap = {
  S: '14px',
  M: '16px',
  L: '18px',
};

const getDefaultAttrs = ({ type = 'regular', size = 'M' }: TGetDefaultAttrsParams) => {
  switch (type) {
    case 'regular':
      return css`
        font-size: ${regularMap[size]};
        font-family: ${Font.Regular};
      `;
    default:
      return css`
        font-size: 14px;
      `;
  }
};

export const StyledText = styled.div<TStyledTextProps>`
  ${(props) => css`
    font-weight: 400;
    color: ${props.variant === 'default'
      ? props.theme.body.base
      : props.variant === 'primary'
      ? props.theme.primary.base
      : props.theme.body.base};
    ${getDefaultAttrs({ type: props.type, size: props.size })}
  `}
`;
