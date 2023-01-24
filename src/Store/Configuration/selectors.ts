import {RootState} from 'store/configureStore';

export const getTheme = ({configuration}: RootState) => configuration.theme;
