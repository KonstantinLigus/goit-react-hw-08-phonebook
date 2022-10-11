import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './conatactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const pending = state => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: pending,
    [deleteContact.fulfilled](state, action) {
      return {
        error: null,
        isLoading: false,
        items: state.items.filter(contact => contact.id !== action.meta.arg),
      };
    },
    [deleteContact.rejected]: rejected,
    [addContact.pending]: pending,
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]: rejected,
  },
});
export const contactsReducer = contactsSlice.reducer;
