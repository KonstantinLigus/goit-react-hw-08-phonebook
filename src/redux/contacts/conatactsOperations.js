import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:8080';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      const filteredItems = getState().contacts.items.filter(
        contact => contact._id !== response.data.deletedContact._id
      );
      return filteredItems;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data.createdContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
