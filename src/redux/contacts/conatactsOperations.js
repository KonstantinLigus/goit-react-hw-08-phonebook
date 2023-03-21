import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/contacts`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchFavoriteContacts = createAsyncThunk(
  'contacts/fetchFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/contacts/fetch/favorites`);
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
      const response = await axios.delete(`${baseUrl}/contacts/${contactId}`);
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
      const response = await axios.post(`${baseUrl}/contacts`, contact);
      return response.data.createdContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contact/update',
  async (updatedContact, { rejectWithValue, getState }) => {
    const { _id: contactId, values } = updatedContact;
    try {
      const response = await axios.patch(
        `${baseUrl}/contacts/${contactId}`,
        values
      );
      const contactFromRes = response.data.updatedContact;
      const contacts = getState().contacts.items;
      const refreshedContacts = contacts.filter(
        contact => contact._id !== contactFromRes._id
      );
      refreshedContacts.push(contactFromRes);
      return refreshedContacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
