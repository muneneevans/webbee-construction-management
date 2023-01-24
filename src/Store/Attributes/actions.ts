import {IAttribute, IAttributeType} from './interfaces';
import {getAttributes} from './selectors';
import * as actionTypes from './actionTypes';
import {Dispatch} from 'redux';
import {RootState} from '../configureStore';
import {IProcessTypes} from '../Shared/interfaces';
import moment from 'moment';
const is = require('is_js');

//#region create attrtibute
export const createAttribute = (categoryId: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    //Signal the start of the process

    dispatch({
      type: actionTypes.CREATE_ATTRIBUTE_REQUESTED,
      payload: {
        createAttributeProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    const newAttributes: IAttribute[] = Object.assign(
      [],
      getAttributes(getState()),
    );

    newAttributes.push({
      categoryId,
      type: IAttributeType.text,
      name: '',
      isTitle: false,
      id: moment().valueOf().toString(),
    });

    dispatch({
      type: actionTypes.CREATE_ATTRIBUTE_SUCCEEDED,
      payload: {
        createAttributeProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        attributes: newAttributes,
      },
    });
  };
};
export const resetCreateAttribute = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.CREATE_ATTRIBUTE_RESET,
      payload: {
        createAttributeProcess: {status: IProcessTypes.IDLE},
      },
    });
  };
};
//#endregion

//#region delete attribute
export const deleteAttribute = (attributeId: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.DELETE_ATTRIBUTE_REQUESTED,
      payload: {
        deleteAttributeProcess: {
          status: IProcessTypes.IDLE,
          error: '',
          message: '',
        },
      },
    });

    const newAttributes: IAttribute[] = Object.assign(
      [],
      getAttributes(getState()),
    );
    // const newAttributes: IAttribute[] = Object.assign([]);

    let foundIndex = newAttributes.findIndex(item => item.id === attributeId);

    if (foundIndex >= 0) {
      newAttributes.splice(foundIndex, 1);
    }

    dispatch({
      type: actionTypes.DELETE_ATTRIBUTE_SUCCEEDED,
      payload: {
        deleteAttributeProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        attributes: newAttributes,
      },
    });
  };
};

export const resetDeleteAttribute = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.DELETE_ATTRIBUTE_RESET,
      payload: {
        deleteAttributeProcess: {
          status: IProcessTypes.IDLE,
          error: '',
          message: '',
        },
      },
    });
  };
};
//#endregion

//#region update Attribute
export const updateAttribute = (attributeDetails: IAttribute) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.UPDATE_ATTRIBUTE_REQUESTED,
      payload: {
        updateAttributeProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    let newAttributes: IAttribute[] = Object.assign(
      [],
      getAttributes(getState()),
    );

    let foundIndex = newAttributes.findIndex(
      (item: IAttribute) => item.id === attributeDetails.id,
    );

    if (foundIndex >= 0) {
      newAttributes[foundIndex] = {...attributeDetails};
    }
    dispatch({
      type: actionTypes.UPDATE_ATTRIBUTE_SUCCEEDED,
      payload: {
        updateAttributeProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        attributes: newAttributes,
      },
    });
  };
};

export const resetUpdateAttribute = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_ATTRIBUTE_RESET,
      payload: {
        updateAttributeProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
      },
    });
  };
};
//#endregion
