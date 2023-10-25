import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/ContactsApi/authApi';


export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {

    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);



export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
