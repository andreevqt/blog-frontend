import React from 'react';

import { ThemeProvider } from '../../theme';
import { GlobalStyles } from '../global-styles';
import { Header } from '../header';

export const App: React.FC = () => (
  <ThemeProvider themeName="base">
    <GlobalStyles>
      <Header />
    </GlobalStyles>
  </ThemeProvider>
);
