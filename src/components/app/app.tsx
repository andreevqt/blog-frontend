import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '../../theme';
import { GlobalStyles } from '../global-styles';
import { Header } from '../header';

export const App: React.FC = () => (
  <ThemeProvider themeName="base">
    <GlobalStyles>
      <Router>
        <Header />
      </Router>
    </GlobalStyles>
  </ThemeProvider>
);
