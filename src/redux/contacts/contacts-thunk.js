import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContacts, deleteContacts, getContacts } from 'services/contactsAPI';
import {
  addContact,
  deleteContact,
  getContacts,
  token,
} from 'services/usersAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (event, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('Token is invalid');
      }
      token.set(savedToken);
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
