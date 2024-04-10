import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./person/personSlice";

// Create a Redux store using the configureStore function
// The reducer argument is an empty object, which means there are no initial reducers defined
const store = configureStore({
  reducer: {
    person: personReducer,
  },
});

export default store;
