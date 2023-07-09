import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
},
    extraReducers: (builder) => {
    builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(addContact.pending, handlePending)
        .addCase(deleteContact.pending, handlePending)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
    });
},
});

export default contactsSlice.reducer;

