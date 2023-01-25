import {IProcessTypes} from './../Shared/interfaces';
import {IMachineInitialState} from './interfaces';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const is = require('is_js');

const initialState: IMachineInitialState = {
  createMachineProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  updateMachineProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  deleteMachineProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  createMachineAttributeProcess: {
    status: IProcessTypes.IDLE,
    error: '',
    message: '',
  },
  updateMachineAttributeProcess: {
    status: IProcessTypes.IDLE,
    error: '',
    message: '',
  },
  deleteMachineAttributeProcess: {
    status: IProcessTypes.IDLE,
    error: '',
    message: '',
  },
  machines: [],
  machineAttributes: [],
};

const machinesPersistConfig = {
  key: 'machines',
  storage: AsyncStorage,
  blacklist: [
    'createMachineProcess',
    'updateMachineProcess',
    'deleteMachineProcess',
    'deleteMachineAttributeProcess',
    'updateMachineAttributeProcess',
  ],
};

const machinesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    default:
      if (is.existy(action.payload) && is.existy(action.type)) {
        if (action.type.split('.')[0] === 'machines') {
          return {...state, ...action.payload};
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};

export default persistReducer(machinesPersistConfig, machinesReducer);
