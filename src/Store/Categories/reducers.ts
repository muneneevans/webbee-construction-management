import {IProcessTypes} from './../Shared/interfaces';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICategoriesInitialState} from './interfaces';

const is = require('is_js');

const initialState: ICategoriesInitialState = {
  categories: [],
  createCategoryProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  deleteCategoryProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
  updateCategoryProcess: {status: IProcessTypes.IDLE, error: '', message: ''},
};

const categoriesPersistConfig = {
  key: 'categories',
  storage: AsyncStorage,
  blacklist: ['createCategoryProcess', 'deleteCategoryProcess'],
};

const categoriesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    default:
      if (is.existy(action.payload) && is.existy(action.type)) {
        if (action.type.split('.')[0] === 'categories') {
          return {...state, ...action.payload};
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};

export default persistReducer(categoriesPersistConfig, categoriesReducer);
