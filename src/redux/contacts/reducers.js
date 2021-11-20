import { createReducer } from '@reduxjs/toolkit';
// import dataContacts from '../../fileJson/contacts.json';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  filterContacts,
} from './actions';

export const contactList = createReducer([], {
  [addContactsRequest]: (state, { payload }) => [...state, payload],
  [addContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [addContactsError]: (_, action) => action.payload,
});

export const contactFilter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

// export const contacts = createReducer([], {
//   [getContactsSuccess]: (state, action) => {
//     return [...state, ...action.payload];
//   },
// });

// export const loading = createReducer(false, {
//   [getContactsRequest]: (_, action) => true,
// });

// export const error = createReducer(null, {
//   [getContactsError]: (_, action) => action.payload,
// });
