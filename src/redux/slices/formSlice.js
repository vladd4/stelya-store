import { createSlice } from "@reduxjs/toolkit";

import { handleOpacity } from "../../utils/hideBody_helper";
import {
  main_elements_ids,
  product_elements_ids,
} from "../../static_store/element_ids";

const initialState = {
  isClicked: false,
  isClickedAlert: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setClicked(state, action) {
      state.isClicked = action.payload;
      handleOpacity(action, main_elements_ids, product_elements_ids);
    },
    setClickedAlert(state, action) {
      state.isClickedAlert = action.payload;
      handleOpacity(action, main_elements_ids, product_elements_ids);
    },
  },
});

export const { setClicked, setClickedAlert } = formSlice.actions;
export default formSlice.reducer;
