import { TThemeNames, TTheme } from '../types';
import { base } from '../themes/base';

export const getTheme = (name: TThemeNames) => {
  const themes: Partial<Record<TThemeNames, TTheme>> = {
    base,
  };

  return themes[name];
};
