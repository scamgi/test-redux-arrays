import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./person/personSlice";
import peopleReducer from "./person/peopleSlice";

// Create a Redux store using the configureStore function
// The reducer argument is an empty object, which means there are no initial reducers defined
const store = configureStore({
  reducer: {
    person: personReducer,
    people: peopleReducer,
  },
});

export default store;
