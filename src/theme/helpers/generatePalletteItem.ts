import { darken } from './darken';
import { lighten } from './lighten';

export const generatePalletteItem = (c: string) => ({
  base: c,
  lightest: lighten(c, 0.2),
  light: lighten(c, 0.1),
  dark: darken(c, 0.2),
  darkest: darken(c, 0.4),
});
