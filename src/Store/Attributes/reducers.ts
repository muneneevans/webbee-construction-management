import {IProcessTypes} from './../Shared/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {IAttributeInitialState} from './interfaces';
const is = require('is_js');

const initialState: IAttributeInitialState = {
  createAttributeProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  deleteAttributeProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  updateAttributeProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  attributes: [],
};

const attributesPersistConfig = {
  key: 'attributes',
  storage: AsyncStorage,
  blacklist: ['deleteAttributeProcess', 'createAttributeProcess'],
};

const attributesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    default:
      if (is.existy(action.payload) && is.existy(action.type)) {
        if (action.type.split('.')[0] === 'attributes') {
          return {...state, ...action.payload};
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};

export default persistReducer(attributesPersistConfig, attributesReducer);
