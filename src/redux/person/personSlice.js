/**
 * This file creates a new slice of person for redux
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Giacomo",
  surname: "Scampini",
  age: 22,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setSurname, setAge } = personSlice.actions;
export default personSlice.reducer;
