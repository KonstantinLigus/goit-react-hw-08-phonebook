import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:8080/';

const setAuthorizationHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthtorizationHeader = () =>
  (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthorizationHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthorizationHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logOut', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthtorizationHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue('user is not authorized');
    }
    try {
      setAuthorizationHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
