import { createSlice } from '@reduxjs/toolkit';
import {
  changeUserSubscription,
  logIn,
  logOut,
  refreshUser,
  register,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    subscription: null,
    avatarURL: null,
  },
  error: null,
  errorMessage: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserError(state) {
      state.error = null;
      state.errorMessage = '';
    },
  },
  extraReducers: {
    [register.rejected](state, action) {
      state.error = true;
      state.errorMessage = action.payload;
    },
    [register.pending](state) {
      state.error = false;
      state.errorMessage = '';
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.createdUser;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = false;
      state.errorMessage = '';
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [changeUserSubscription.fulfilled](state, action) {
      state.user.subscription = action.payload;
    },
  },
});

export const { setUserError } = authSlice.actions;
export const authReducer = authSlice.reducer;
