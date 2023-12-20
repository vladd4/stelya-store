import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setClicked(state, action) {
      state.isClicked = action.payload;
    },
  },
});

export const { setClicked } = headerSlice.actions;
export default headerSlice.reducer;
