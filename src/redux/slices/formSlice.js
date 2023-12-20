import { createSlice } from "@reduxjs/toolkit";
import { hideShowBody, hideShowBodyProduct } from "../../utils/hideBody_helper";

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
      if (action.payload === true) {
        if (document.querySelector("#welcome")) {
          hideShowBody("hidden", "0.6", "none");
        } else {
          hideShowBodyProduct("hidden", "0.6", "none");
        }
      } else {
        if (document.querySelector("#welcome")) {
          hideShowBody("scroll", "1", "auto");
        } else {
          hideShowBodyProduct("scroll", "1", "auto");
        }
      }
    },
    setClickedAlert(state, action) {
      state.isClickedAlert = action.payload;
      if (action.payload === true) {
        if (document.querySelector("#welcome")) {
          hideShowBody("hidden", "0.6", "none");
        } else {
          hideShowBodyProduct("hidden", "0.6", "none");
        }
      } else {
        if (document.querySelector("#welcome")) {
          hideShowBody("scroll", "1", "auto");
        } else {
          hideShowBodyProduct("scroll", "1", "auto");
        }
      }
    },
  },
});

export const { setClicked, setClickedAlert } = formSlice.actions;
export default formSlice.reducer;
