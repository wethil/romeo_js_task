import React from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { GridThemeProvider, BaseCSS } from "styled-bootstrap-grid";

import GlobalStyles from "./GlobalStyles";

const palette = {
  primary_100: "#BBDEFB",
  primary_200: "#90C9F9",
  primary_300: "#63B4F6",
  primary_400: "#42A4F5",
  primary_500: "#2194F3",
  primary_600: "#1F87E5",
  primary_700: "#1A75D2",
  primary_800: "#1764C0",
  info_100: "#757575",
  info_800: "#212121",
  negative_100: "#FFCDD2",
  negative_200: "#FFCDD2",
  negative_500: "#F44336",
  negative_600: "#D32F2F",
  negative_700: "#D32F2F",
  negative_800: "#7C0000",
  warning_100: "#FFECD3",
  warning_500: "#EF670A",
  warning_600: "#CE4500",
  warning_700: "#A43700",
  reward_200: "#FFFAB2",
  reward_400: "#FFE900",
  reward_500: "#E2C700",
  generic_100: "#FFFFFF",
  neutral_200: "#F8F8F8",
  neutral_300: "#EEEEEE",
  neutral_400: "#E4E4E4",
  neutral_500: "#BBBBBB",
  neutral_700: "#676767",
  neutral_800: "#343434",
};

/* Every  value in this object represent itself and above until next breakpoint. Ex (sm is 0 px to 767px ) */
const breakpoints = {
  xl: "1200px",
  lg: "1024px",
  md: "768px",
  sm: "0px",
};

/**
 *  Breakpoints integers for styled-bootstrap-grid
 */
export const breakPointsAsInteger = {
  xl: parseInt(breakpoints.xl, 10),
  md: parseInt(breakpoints.md, 10),
  sm: parseInt(breakpoints.sm, 10),
};

const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
};

const fonts = [
  "Montserrat, Verdana, Geneva, sans-serif",
  "'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif",
];
fonts.primary = fonts[0];
fonts.secondary = fonts[1];

const fontSizes = [14, 16, 20, 24, 32];
fontSizes.mini = fontSizes[0];
fontSizes.middle = fontSizes[1];
fontSizes.large = fontSizes[2];
fontSizes.xlarge = fontSizes[3];
fontSizes.huge = fontSizes[4];

const lineHeights = ["24px", "27px", "34px", "41px", "54px"];
lineHeights.mini = lineHeights[0];
lineHeights.middle = lineHeights[1];
lineHeights.large = lineHeights[2];
lineHeights.xlarge = lineHeights[3];
lineHeights.huge = lineHeights[4];

const fontWeights = [300, 400, 600];
fontWeights.light = fontWeights[0];
fontWeights.regular = fontWeights[1];
fontWeights.bold = fontWeights[2];

const space = [0, 4, 8, 16, 24, 32, 40, 56];
space.xxs = space[1];
space.xs = space[2];
space.sm = space[3];
space.md = space[4];
space.lg = space[5];
space.xl = space[6];
space.xxl = space[7];

const borderWidths = ["1px", "2px"];
borderWidths.sm = borderWidths[0];
borderWidths.md = borderWidths[1];

export const theme = {
  borderWidths,
  colors: {
    ...palette,
    border: palette.neutral_400,
    background: palette.primary_600,
    text: palette.info_800,
    black: palette.info_800,
    white: palette.primary_100,
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  mediaQueries,
  grid: {
    breakpoints: breakPointsAsInteger, // styled-bootstrap-grid requires pixels as integer
    container: {
      padding: {
        xl: 32,
        lg: 32,
        md: 16,
        sm: 16,
      },
      maxWidth: {
        xl: 1144,
        lg: 960,
        md: "100%",
        sm: "100%",
      },
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    <GridThemeProvider gridTheme={theme.grid}>
      <BaseCSS />
      <GlobalStyles />
      {children}
    </GridThemeProvider>
  </StyledComponentsProvider>
);

export default ThemeProvider;
