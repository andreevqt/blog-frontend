import { css } from 'styled-components';

import gilroyRegularWoff from './fonts/Gilroy-Regular.woff';
import gilroyRegularWoff2 from './fonts/Gilroy-Regular.woff2';
import gilroyMediumWoff from './fonts/Gilroy-Medium.woff';
import gilroyMediumWoff2 from './fonts/Gilroy-Medium.woff2';
import gilroyLightWoff from './fonts/Gilroy-Medium.woff';
import gilroyLightWoff2 from './fonts/Gilroy-Medium.woff2';
import gilroyExtraBoldWoff from './fonts/Gilroy-ExtraBold.woff';
import gilroyExtraBoldWoff2 from './fonts/Gilroy-ExtraBold.woff2';

export const fonts = css`
  @font-face {
    font-family: 'Gilroy';
    src: url(${gilroyMediumWoff2}) format('woff2'), url(${gilroyMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${gilroyRegularWoff2}) format('woff2'), url(${gilroyRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${gilroyLightWoff2}) format('woff2'), url(${gilroyLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${gilroyExtraBoldWoff2}) format('woff2'), url(${gilroyExtraBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;
