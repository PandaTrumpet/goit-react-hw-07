import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },

  reducers: {
    findContact(state, action) {
      state.name = action.payload;
    },
  },
});
export const selectFilter = (state) => state.filter.name;
export const { findContact } = filterSlice.actions;
export default filterSlice.reducer;
