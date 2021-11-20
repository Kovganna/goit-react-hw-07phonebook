import { createAction, nanoid } from '@reduxjs/toolkit';

// pending
export const addContactsRequest = createAction('addContacts/request');
// resolved
export const addContactsSuccess = createAction('addContacts/success');
// rejected
export const addContactsError = createAction('addContacts/error');

export const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const removeContact = createAction('contact/delete');
export const filterContacts = createAction('contact/filter');
