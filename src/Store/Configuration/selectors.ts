import {RootState} from 'store/configureStore';
import {darkTheme} from './theme';

export const getTheme = ({configuration}: RootState) => configuration.theme;
export const getIsDarkTheme = ({configuration}: RootState) =>
  configuration.theme.PRIMARY_BACKGROUND_COLOR ===
  darkTheme.PRIMARY_BACKGROUND_COLOR;
