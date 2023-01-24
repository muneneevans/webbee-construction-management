import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import configReducer from './Configuration/reducers';
import categoriesReducer from './Categories/reducers';
import attributesReducer from './Attributes/reducers';

const persistConfig = {
  key: 'root',
  blacklist: ['configuration', 'categories', 'attributes'],
  storage: AsyncStorage,
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    configuration: configReducer,
    categories: categoriesReducer,
    attributes: attributesReducer,
  }),
);

export default rootReducer;
