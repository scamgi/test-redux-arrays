/**
 * This file creates a new slice of person for redux
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Tommaso",
    surname: "Crociera",
    age: 60,
  },
];

export const personSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    pushPerson: (state, action) => {
      state.push(action.payload);
    },
    removeLastPerson: (state, action) => {
      state.pop();
    },
  },
});

export const { pushPerson, removeLastPerson } = personSlice.actions;
export default personSlice.reducer;
