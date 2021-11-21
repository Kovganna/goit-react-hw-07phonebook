import { createReducer } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './operations';
import { filterContacts } from './actions';
// import dataContacts from '../../fileJson/contacts.json';
// import { createSlice } from '@reduxjs/toolkit';

export const contactList = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const contactFilter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

// export const contacts = createReducer([], {
//   [addContactsSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// export const loading = createReducer(false, {
//   [addContactsRequest]: (state, { payload }) => [...state, payload],
// });

// export const error = createReducer(null, {
//   [addContactsError]: (_, { payload }) => payload,
// });
