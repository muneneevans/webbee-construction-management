import {getCategories} from './selectors';
import * as actionTypes from './actionTypes';
import {Dispatch} from 'redux';

import {RootState} from '../configureStore';

import {IProcessTypes} from '../Shared/interfaces';
import moment from 'moment';

//#region create category
export const createCategory = () => {
  return (dispatch: any, getState: () => RootState) => {
    //Signal the start of the process

    dispatch({
      type: actionTypes.CREATE_CATEGORY_REQUESTED,
      payload: {
        createCategoryProcess: {status: IProcessTypes.PROCESSING},
      },
    });

    //create category
    const newCategories = Object.assign([], getCategories(getState()));
    newCategories.push({
      id: moment().valueOf().toString(),
      name: '',
    });

    dispatch({
      type: actionTypes.CREATE_CATEGORY_SUCCEEDED,
      payload: {categories: newCategories},
    });
  };
};
export const resetCreateCategory = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.CREATE_CATEGORY_RESET,
      payload: {
        createCategoryProcess: {status: IProcessTypes.IDLE},
      },
    });
  };
};

//#endregion
