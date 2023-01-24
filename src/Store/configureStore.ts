import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import reducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';

const middlewares = [thunk];
// let store = {};
// if (__DEV__) {
//   const Reactotron = require('src/../ReactotronConfig').default;
//   store = configureStore({
//     reducer: reducer,
//     middleware: middlewares,
//   });
// } else {
// }

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

let store = configureStore({
  reducer: reducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
