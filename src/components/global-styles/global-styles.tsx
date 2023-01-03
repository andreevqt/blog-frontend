import React from 'react';
import { Normalize } from 'styled-normalize';

import { Global } from './global-styles.style';

type TGlobalStylesProps = {
  children: React.ReactNode;
};

export const GlobalStyles: React.FC<TGlobalStylesProps> = ({ children }) => (
  <>
    <Global />
    <Normalize />
    {children}
  </>
);
