import { createReducer } from '@reduxjs/toolkit';
import dataContacts from '../../fileJson/contacts.json';
import { addContact, removeContact, filterContacts } from './actions';

// const initState = [{ dataContacts }];

// const contactList = (state = initState, action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload];

//     case 'contact/delete':
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const contactFilter = (state = '', { payload }) => {
//   return payload;
// };

export const contactList = createReducer(dataContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const contactFilter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
