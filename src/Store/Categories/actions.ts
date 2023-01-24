import {getCategories} from './selectors';
import * as actionTypes from './actionTypes';
import {Dispatch} from 'redux';

import {RootState} from '../configureStore';

import {IProcessTypes} from '../Shared/interfaces';
import moment from 'moment';
import {ICategory} from './interfaces';

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

//#region Delete category
export const deleteCategory = (categoryId: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.DELETE_CATEGORY_REQUESTED,
      payload: {
        deleteCategoryProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    const newCategories: ICategory[] = Object.assign(
      [],
      getCategories(getState()),
    );

    const foundCategory = newCategories.findIndex(
      item => item.id === categoryId,
    );
    if (foundCategory >= 0) {
      newCategories.splice(foundCategory, 1);
    }

    dispatch({
      type: actionTypes.DELETE_CATEGORY_SUCCEEDED,
      payload: {
        deleteCategoryProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        categories: newCategories,
      },
    });
  };
};
export const resetDeleteCategory = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.CREATE_CATEGORY_RESET,
      payload: {
        deleteCategoryProcess: {status: IProcessTypes.IDLE},
      },
    });
  };
};
//#endregion
