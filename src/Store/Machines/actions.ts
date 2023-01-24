import {IAttribute} from 'src/Store/Attributes/interfaces';
import {getAttributes} from 'src/Store/Attributes/selectors';
import {getMachineAttributes} from 'src/Store/Machines/selectors';
import {getMachines} from './selectors';
import {IProcessTypes} from './../Shared/interfaces';
import {RootState} from './../configureStore';
import * as actionTypes from './actionTypes';
import {Dispatch} from 'redux';
import {IMachine, IMachineAttribute} from './interfaces';
import moment from 'moment';

//#region create machine
export const createMachine = (categoryId: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.CREATE_MACHINE_REQUESTED,
      payload: {
        createMachineProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    const newMachines: IMachine[] = Object.assign([], getMachines(getState()));
    // const newMachines: IMachine[] = [];
    const createdMachine = {
      id: moment().valueOf().toString(),
      categoryId: categoryId,
    };

    newMachines.push(createdMachine);

    const newMachineAttributes: IMachineAttribute[] = Object.assign(
      [],
      getMachineAttributes(getState()),
    );

    const categoryAttributes = Object.assign(
      [],

      getAttributes(getState()).filter(item => item.categoryId === categoryId),
    );

    categoryAttributes.forEach((attribute: IAttribute, index: number) =>
      newMachineAttributes.push({
        id: `${moment().valueOf().toString()}${index}`,
        attributeId: attribute.id,
        value: null,
        machineId: createdMachine.id,
      }),
    );

    dispatch({
      type: actionTypes.CREATE_MACHINE_SUCCEEDED,
      payload: {
        createMachineProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
        // machines: [],
        // machineAttributes: [],
        machines: newMachines,
        machineAttributes: newMachineAttributes,
      },
    });
  };
};

export const resetCreateMachine = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.CREATE_MACHINE_RESET,
      payload: {
        createMachineProcess: {
          status: IProcessTypes.IDLE,
          error: '',
          message: '',
        },
      },
    });
  };
};
//#endregion

//#region update machineAttribute
export const updateMachineAttribute = (
  machineAttributeDetails: IMachineAttribute,
) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.UPDATE_MACHINE_ATTRIBUTE_REQUESTED,
      payload: {
        updateMachineAttributeProcess: {
          status: IProcessTypes.PROCESSING,
          error: '',
          message: '',
        },
      },
    });

    let newMachineAttributes: IMachineAttribute[] = Object.assign(
      [],
      getMachineAttributes(getState()),
    );
    console.log('machineAttributeDetails', machineAttributeDetails.id);
    console.log('newMachineAttributes', newMachineAttributes);

    const foundIndex = newMachineAttributes.findIndex(
      item => item.id === machineAttributeDetails.id,
    );

    if (foundIndex >= 0) {
      newMachineAttributes[foundIndex] = machineAttributeDetails;
    }

    dispatch({
      type: actionTypes.UPDATE_MACHINE_ATTRIBUTE_SUCCEEDED,
      payload: {
        updateMachineAttributeProcess: {
          status: IProcessTypes.SUCCESS,
          error: '',
          message: '',
        },
        machineAttributes: newMachineAttributes,
      },
    });
  };
};

export const resetUpdateUpdateMachineAttribute = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_MACHINE_ATTRIBUTE_RESET,
      payload: {
        updateMachineAttributeProcess: {
          status: IProcessTypes.IDLE,
          error: '',
          message: '',
        },
      },
    });
  };
};
//#endregion
