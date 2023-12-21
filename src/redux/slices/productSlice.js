import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "Матова стеля",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setHeading(state, action) {
      state.heading = action.payload;
    },
  },
});

export const { setHeading } = productSlice.actions;
export default productSlice.reducer;
