import styled, { css } from 'styled-components';

import { TStyledWithTheme, TTheme } from '../../theme';
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
      return css<TTheme>`
        font-size: ${regularMap[size]};
        font-family: ${Font.Regular};
        font-weight: 400;
      `;
    default:
      return css<TTheme>`
        font-size: 14px;
      `;
  }
};

export const StyledText = styled.div<TStyledWithTheme<TStyledTextProps>>`
  ${(props) => `
    ${getDefaultAttrs({ type: props.type, size: props.size })}
    color: ${
      props.variant === 'default'
        ? props.theme.body.base
        : props.variant === 'primary'
        ? props.theme.primary.base
        : props.theme.body.base
    };
  `}
`;
