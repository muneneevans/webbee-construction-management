import {IColor} from './interfaces';
import {Dispatch} from 'redux';
import {RootState} from '../configureStore';
import * as actionTypes from './actionTypes';
import {getTheme} from './selectors';
import {darkTheme, lightTheme} from './theme';

//#region change theme

export const enableDarkTheme = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.CHANGE_THEME_REQUESTED,
      payload: {},
    });

    const currentTheme = getTheme(getState());
    dispatch({
      type: actionTypes.CHANGE_THEME_SUCCEEDED,
      payload: {
        theme: {...currentTheme, ...darkTheme},
      },
    });
  };
};
export const disableDarkTheme = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.CHANGE_THEME_REQUESTED,
      payload: {},
    });

    const currentTheme = getTheme(getState());
    dispatch({
      type: actionTypes.CHANGE_THEME_SUCCEEDED,
      payload: {
        theme: {...currentTheme, ...lightTheme},
      },
    });
  };
};

export const changeColor = (colorOption: IColor) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.CHANGE_COLOR_REQUESTED,
      payload: {},
    });

    const currentTheme = getTheme(getState());
    dispatch({
      type: actionTypes.CHANGE_COLOR_SUCCEEDED,
      payload: {
        theme: {...currentTheme, ...colorOption},
      },
    });
  };
};

//#endregion
