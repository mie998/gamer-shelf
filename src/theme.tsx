import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  xs: '420', // smartPhone
  sm: '768', // tablet
  md: '992', // PC
  lg: '1400',
  xl: '1800',
});

export const chakraTheme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
});

export const gamerShelfTheme = {
  colors: {
    steamColorPalette: {
      deepDarkBlue: '#171a21',
      darkBlue: '#1b2838',
      blue: '#2a475e',
      lightBlue: '#66c0f4',
    },
    steamWordColor: '#c7d5e0',
  },
};
