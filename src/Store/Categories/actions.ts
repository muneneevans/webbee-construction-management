import {deleteAttribute} from 'src/Store/Attributes/actions';
import {getAttributes} from 'src/Store/Attributes/selectors';
import {getCategories} from './selectors';
import * as actionTypes from './actionTypes';
import {Dispatch} from 'redux';

import {RootState} from '../configureStore';

import {IProcessTypes} from '../Shared/interfaces';
import moment from 'moment';
import {ICategory} from './interfaces';
import {getMachines} from '../Machines/selectors';
import {IMachine} from '../Machines/interfaces';
import {deleteMachine} from '../Machines/actions';
import {IAttribute} from '../Attributes/interfaces';

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
  return (dispatch: any, getState: () => RootState) => {
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

      getMachines(getState())
        .filter((item: IMachine) => item.categoryId === categoryId)
        .forEach((item: IMachine) => {
          dispatch(deleteMachine(item.id));
        });

      getAttributes(getState())
        .filter((item: IAttribute) => item.categoryId === categoryId)
        .forEach((item: IAttribute) => {
          dispatch(deleteAttribute(item.id));
        });
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

//#region update category
export const updateCategory = (categoryDetails: ICategory) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.UPDATE_CATEGORY_REQUESTED,
      payload: {
        updateCategoryProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    let newCategories: ICategory[] = Object.assign(
      [],
      getCategories(getState()),
    );

    const foundCategory = newCategories.findIndex(
      item => item.id === categoryDetails.id,
    );
    if (foundCategory >= 0) {
      newCategories[foundCategory] = categoryDetails;
    }

    dispatch({
      type: actionTypes.UPDATE_CATEGORY_SUCCEEDED,
      payload: {
        updateCategoryProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        categories: newCategories,
      },
    });
  };
};
export const resetUpdateCategory = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CATEGORY_RESET,
      payload: {
        updateCategoryProcess: {status: IProcessTypes.IDLE},
      },
    });
  };
};
//#endregion
