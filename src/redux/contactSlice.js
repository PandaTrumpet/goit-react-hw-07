import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./contactsOps";
const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContact.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectError = (state) => state.contact.error;

export const selectLoading = (state) => state.contact.loading;
// console.log(selectLoading);
export const selectContacts = (state) => state.contact.items;
// console.log(selectLoading());

export const selectFilteredContacts = createSelector(
  [(state) => state.contact.items, (state) => state.filter.name],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
// console.log(contactSlice);
export default contactSlice.reducer;
