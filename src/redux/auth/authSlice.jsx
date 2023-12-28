import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLoggedIn = false;
        state.isRefresh = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })

      .addCase(refreshThunk.rejected, state => {
        state.isLoggedIn = false;
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
