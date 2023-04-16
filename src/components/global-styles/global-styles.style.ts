import { createGlobalStyle } from 'styled-components';

import { fonts, Spacing, TTheme } from '../../theme';

export const Global = createGlobalStyle<{ theme: TTheme }>`
  ${fonts}

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => `${theme.background.base}`};
    color: ${({ theme }) => `${theme.body.base}`};
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .mr-xs {
    margin-right: ${Spacing.XS};
  };

`;
