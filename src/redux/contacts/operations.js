import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6198e96a164fa60017c2321d.mockapi.io';

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
      // console.log(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts`);
      // return data;
      console.log(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
