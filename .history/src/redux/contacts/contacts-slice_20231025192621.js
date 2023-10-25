
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchEditContacts,
  // fetchAddContacts,
  // fetchDeleteContacts,
} from './contacts-operations';


const initialState = {
  items: [],
  loading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload.results;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchEditContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEditContacts.fulfilled, (store, { payload }) => {
        console.log('payload', payload);
        store.loading = false;
        const { id} = payload;
        store.items = store.items.filter(contact => contact.id !== id);
        store.items.push(payload);
      })
      .addCase(fetchEditContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
      


});


export default contactsSlice.reducer;


