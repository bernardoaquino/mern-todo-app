import { getGridSize } from "./grid"

const FONT_FAMILIES = {
  Montserrat: 'Montserrat',
  OpenSans: 'Open Sans'
}

const FONT_SIZES = {
  12: getGridSize(1.5),
  14: getGridSize(1.75),
  16: getGridSize(2),
  20: getGridSize(2.5),
  24: getGridSize(3),
  32: getGridSize(4),
  40: getGridSize(5),
  48: getGridSize(6),
  64: getGridSize(8)
};

const FONT_WEIGHTS = {
  light: 300,
  normal: 400,
  regular: 500,
  bold: 600,
  extraBold: 700
};

const BREAKPOINTS = {
  sm: '768px',
  md: '1024px',
  lg: '1280px'
};

const COLORS = {
  brand: {
    light: '#76C04D',
    normal: '#007F76',
    pure: '#FFD31D',
  },
  analogue: {
    pure: '#76C04D',
  },
  neutral: {
      100: '#FFFFFF',
      80: '#E7E7E7',
      60: '#D1D1D1',
      40: '#C4C4C4',
      20: '#BDBDBD',
      0: '#000000',
  }
};

export const themeConfig = {
  grid: getGridSize,
  typography: {
    fontFamily: FONT_FAMILIES,
    fontSize: FONT_SIZES,
    fontWeight: FONT_WEIGHTS,
  },
  color: COLORS,
  breakpoints: BREAKPOINTS
};
