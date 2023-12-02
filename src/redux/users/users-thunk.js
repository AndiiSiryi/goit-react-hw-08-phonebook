import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUsers,
  logInUser,
  logOutUser,
  signUpUser,
  token,
} from 'services/usersAPI';

export const signUpThunk = createAsyncThunk(
  'auth/singUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await logInUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logOutUser();
      token.unSet();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('Please Sing up to get a token');
      }
      token.set(savedToken);
      const data = await currentUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
