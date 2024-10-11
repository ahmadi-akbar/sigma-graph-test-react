import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import graphReducer from './graphSlice';
import actionReducer from './actionSlice';

const reducer = combineReducers({
  graph: graphReducer,
  action: actionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
