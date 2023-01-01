import { TThemeNames, TThemes } from '../types';
import { base } from '../themes/base';

export const getTheme = (name: TThemeNames) => {
  const themes: Partial<Record<TThemeNames, TThemes>> = {
    base,
  };

  return themes[name];
};
