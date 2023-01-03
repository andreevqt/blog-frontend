import { useContext } from 'react';

import { ThemeContext } from '../context';
import { getTheme } from '../helpers/getTheme';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return getTheme(theme);
};
