import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filter: (state, action) => (state = action.payload),
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
