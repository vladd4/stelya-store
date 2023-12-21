import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import headerReducer from "./slices/headerSlice";
import partnerReducer from "./slices/partnerSlice";
import saleReducer from "./slices/saleSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    header: headerReducer,
    partner: partnerReducer,
    sale: saleReducer,
  },
});
