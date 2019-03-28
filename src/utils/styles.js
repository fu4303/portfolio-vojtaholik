import { keyframes } from '@emotion/core'

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 *    // use the brand color at 25% opacity
 *    border-color: ${colors.brand}40;
 */
export const colors = {
  brandDarker: '#2E414F',
  brandDark: '#0075CD',
  brand: '#0091FF',
  brandBright: '#C4E6FF',
  brandLight: '#E8F0F8',
  brandLighter: '#F2F4F6',
  lightest: '#ffffff',
  darkest: '#002E51',
  text: '#242A2E',
  textMild: '#445C6E',
  textLight: '#606B73',
  textLighter: '#8D9EAA',
  lilac: `#8c65b3`,
  accent: `#ffb238`,
  error: `#ec1818`,
  lemon: `#ffdf37`,
}

export const spacing = {
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
}

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}

export const radius = {
  default: 2,
  large: 4,
}

export const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
].join()

const monospaceFontStack = [
  `Space Mono`,
  `SFMono-Regular`,
  `Menlo`,
  `Monaco`,
  `Consolas`,
  `Liberation Mono`,
  `Courier New`,
  `monospace`,
].join()

export const fonts = {
  body: defaultFontStack,
  heading: defaultFontStack,
  monospace: monospaceFontStack,
}

export const dimensions = {
  headerHeight: '60px',
  cartWidthDesktop: '400px',
  desktopAreaWidth: {
    //closedDesktop: '60px',
    //openDesktop: '340px',
    //openHd: '420px'
  },
  pictureBrowserAction: {
    widthDesktop: '200px',
    heightMobile: '80px',
  },
}

export const scrollbarStyles = {
  WebkitOverflowScrolling: `touch`,
  '&::-webkit-scrollbar': { width: `6px`, height: `6px` },
  '&::-webkit-scrollbar-thumb': { background: colors.brandBright },
  '&::-webkit-scrollbar-thumb:hover': { background: colors.brand },
  '&::-webkit-scrollbar-track': { background: colors.brandLight },
}

const simpleEntry = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
`

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`

export const animations = {
  simpleEntry: `${simpleEntry} .75s ease forwards`,
  deadSimpleEntry: `${deadSimpleEntry} .5s ease forwards`,
}
