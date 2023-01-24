import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import configReducer from './Configuration/reducers';

const persistConfig = {
  key: 'root',
  blacklist: ['configuration'],
  storage: AsyncStorage,
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    configuration: configReducer,
  }),
);

export default rootReducer;
