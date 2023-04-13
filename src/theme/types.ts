import { base } from './themes/base';

export type TThemeNames = 'base' | 'primary';

export type TTheme = typeof base;

export type TStyledWithTheme<T = any> = T & { theme: TTheme };
