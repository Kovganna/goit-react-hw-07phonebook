// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = createStore(contactReducer, composeWithDevTools());
import { combineReducers } from 'redux';
import { contactList, contactFilter } from './contacts/reducers';
import { configureStore } from '@reduxjs/toolkit';

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
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
