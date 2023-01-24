import {DefaultTheme} from 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    FONT_SIZE_TINY: number;
    FONT_SIZE_SMALL: number;
    FONT_SIZE_MEDIUM: number;
    FONT_SIZE_LARGE: number;
    FONT_SIZE_EXTRA_LARGE: number;
    FONT_SIZE_MASSIVE: number;

    FONT_WEIGHT_LIGHT: string;
    FONT_WEIGHT_MEDIUM: string;
    FONT_WEIGHT_BOLD: string;

    PRIMARY_FONT_FAMILY: string;
    PRIMARY_FONT_FAMILY_SEMI_BOLD: string;
    PRIMARY_FONT_FAMILY_BOLD: string;

    SECONDARY_FONT_FAMILY: string;
    SECONDARY_FONT_FAMILY_ITALIC: string;
    SECONDARY_FONT_FAMILY_BOLD: string;
    SECONDARY_FONT_FAMILY_BOLD_ITALIC: string;
    PRIMARY_DIGIT_FONT: string;

    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_BACKGROUND_COLOR_LIGHT: string;

    SECONDARY_BACKGROUND_COLOR: string;
    SECONDARY_BACKGROUND_COLOR_LIGHT: string;

    PRIMARY_TEXT_COLOR: string;
    PRIMARY_TEXT_COLOR_LIGHT: string;
    SECONDARY_TEXT_COLOR: string;
    PRIMARY_TEXT_BACKGROUND_COLOR: string;
    SECONDARY_TEXT_BACKGROUND_COLOR: string;

    PRIMARY_TEXT_PLACE_HOLDER_COLOR: string;

    BORDER_COLOR: string;

    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;

    colors: IColorOption;
  }
}

export interface IConfigurationInitialState {
  //   theme: {base : IBaseTheme, colorOptions.teal, ...lightTheme, colors: colorOptions},
  theme: DefaultTheme;
}

export interface ITheme {
  FONT_SIZE_TINY: number;
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_SIZE_EXTRA_LARGE: number;
  FONT_SIZE_MASSIVE: number;

  FONT_WEIGHT_LIGHT: string;
  FONT_WEIGHT_MEDIUM: string;
  FONT_WEIGHT_BOLD: string;

  PRIMARY_FONT_FAMILY: string;
  PRIMARY_FONT_FAMILY_SEMI_BOLD: string;
  PRIMARY_FONT_FAMILY_BOLD: string;

  SECONDARY_FONT_FAMILY: string;
  SECONDARY_FONT_FAMILY_ITALIC: string;
  SECONDARY_FONT_FAMILY_BOLD: string;
  SECONDARY_FONT_FAMILY_BOLD_ITALIC: string;
  PRIMARY_DIGIT_FONT: string;

  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_BACKGROUND_COLOR_LIGHT: string;

  SECONDARY_BACKGROUND_COLOR: string;
  SECONDARY_BACKGROUND_COLOR_LIGHT: string;

  PRIMARY_TEXT_COLOR: string;
  PRIMARY_TEXT_COLOR_LIGHT: string;
  SECONDARY_TEXT_COLOR: string;
  PRIMARY_TEXT_BACKGROUND_COLOR: string;
  SECONDARY_TEXT_BACKGROUND_COLOR: string;

  PRIMARY_TEXT_PLACE_HOLDER_COLOR: string;

  BORDER_COLOR: string;

  name: string;
  PRIMARY_COLOR_FAINT: string;
  PRIMARY_COLOR_LIGHT: string;
  PRIMARY_COLOR: string;
  PRIMARY_COLOR_BOLD: string;
  PRIMARY_FOREGROUND_COLOR: string;

  colors: IColorOption;
}
export interface IColorOption {
  red: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  pink: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  purple: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  deepPurple: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  indigo: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  blue: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  lightBlue: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  cyan: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  teal: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  green: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  lightGreen: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  lime: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  yellow: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  amber: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  orange: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  deepOrange: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };

  brown: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  gray: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
  blueGray: {
    name: string;
    PRIMARY_COLOR_FAINT: string;
    PRIMARY_COLOR_LIGHT: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_BOLD: string;
    PRIMARY_FOREGROUND_COLOR: string;
  };
}
