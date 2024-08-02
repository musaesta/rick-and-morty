import { configureStore } from "@reduxjs/toolkit";

import personInfoReducer from "./reducers/personInfoReducers";

export const store = configureStore({
  reducer: {
    personInfoReducer,
  },
});
