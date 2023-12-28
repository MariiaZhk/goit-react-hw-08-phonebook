import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from 'configAxios/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/signup', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/users/logout');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thukAPI) => {
    const savedToken = thukAPI.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thukAPI.rejectWithValue('Token does not exist');
    }
    try {
      const response = await api.get('/users/current');
      return response.data;
    } catch (error) {
      return thukAPI.rejectWithValue(error.message);
    }
  }
);
