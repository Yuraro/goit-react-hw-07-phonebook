import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactsSlice = createSlice({
name: 'contacts',
initialState: {
    items: [],
    isLoading: false,
    error: null,
},
extraReducers:  {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
    },

    [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
        contact => contact.id !== action.payload.id
    );
    },
},
});

export default contactsSlice.reducer;