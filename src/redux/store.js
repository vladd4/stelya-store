import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import headerReducer from "./slices/headerSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    header: headerReducer,
  },
});
