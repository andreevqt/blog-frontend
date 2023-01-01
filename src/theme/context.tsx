import React, { ReactNode, createContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { getTheme } from './helpers/getTheme';
import { TThemeNames } from './types';

export const ThemeContext = createContext<TThemeNames>('base');

type TThemeProviderProps = {
  themeName: TThemeNames;
  children: ReactNode;
};

export const ThemeProvider = ({ themeName, children }: TThemeProviderProps) => {
  const theme = getTheme(themeName);

  return (
    <ThemeContext.Provider value={themeName}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
