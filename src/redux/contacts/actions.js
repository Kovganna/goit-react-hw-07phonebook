import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const removeContact = createAction('contact/delete');
export const filterContacts = createAction('contact/filter');

// export const addContact = contact => ({
//   type: 'contact/add',
//   payload: contact,
// });

// export const removeContact = id => ({
//   type: 'contact/delete',
//   payload: { id },
// });

// export const filterContacts = value => ({
//   type: 'contact/filter',
//   payload: value,
// })
