import {IConfigurationInitialState} from 'store/Configuration/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {base, colorOptions, lightTheme} from './theme';
// import * as is from 'is_js';
// import {base, colorOptions, lightTheme} from './theme';

const is = require('is_js');

// import {LOG_OUT_SUCCEEDED} from '../Authentication/actionTypes';

const initialState: IConfigurationInitialState = {
  // theme: {...base, ...colorOptions.teal, ...lightTheme},
  theme: {...base, ...colorOptions.purple, ...lightTheme, colors: colorOptions},
};

const configurationPersistConfig = {
  key: 'configuration',
  storage: AsyncStorage,
  blacklist: ['theme'],
};

const configurationReducer = (
  state = initialState,
  action: {
    type: String;
    payload: any;
  },
) => {
  switch (action.type) {
    default:
      if (is.existy(action.payload) && is.existy(action.type)) {
        if (action.type.split('.')[0] === 'configuration') {
          return {...state, ...action.payload};
        }
        return state;
      }
      return state;
  }
};

export default persistReducer(configurationPersistConfig, configurationReducer);
