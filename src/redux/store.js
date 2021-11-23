import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactList, contactFilter } from './contacts/reducers';

import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['contactFilter'],
};

const contactReducer = combineReducers({
  contactList,
  contactFilter,
});

export const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactReducer) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
