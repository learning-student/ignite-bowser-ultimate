import borderRadius from "./radius";
import { spacing } from "./spacing";
import {BaseTheme, createTheme} from '@shopify/restyle'
import color from './color'




export interface GradientVariant {
  colors ?: Array<string>,
  locations ?: Array<number>,
  start ?: {x: number, y: number},
  end ?: {x: number, y: number},
}

export type Theme = BaseTheme & {
  gradientVariants ?: {
    [key: string]: GradientVariant
  }
};

const theme : Theme = createTheme({
  colors: {
    success: "#42ef4a",
    error: "#ff3d3d",
    black: "#000",
    white: "#fff",
    ...color
  },
  cardVariants: {
    primary: {},
    secondary: {}
  },
  textVariants: {
    primary: {},
    secondary: {},
  },
  buttonVariants: {
    primary: {},
    secondary: {},

  },
  textInputVariants: {
    primary: {},
    secondary: {},
    success: {},
    error: {}
  },
  borderRadii: borderRadius,
  spacing: spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  gradientVariants: {
    primary: {},
    secondary: {},
  }
});


export default theme;

