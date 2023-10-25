import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/ContactsApi/ContactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchEditContacts = createAsyncThunk(
  'contacts/Edit',
  async (data, { rejectWithValue }) => {
    console.log('data', data);
    try {
      const result = await api.editContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
export const fetchDeleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
