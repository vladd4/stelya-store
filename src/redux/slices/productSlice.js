import { createSlice } from "@reduxjs/toolkit";
import Image from "../../assets/service-illustration/2/2.jpg";

const initialState = {
  heading: "stelya_2_h",
  text: "stelya_2_p",
  images: Image,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setHeading(state, action) {
      state.heading = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
  },
});

export const { setHeading, setText, setImages } = productSlice.actions;
export default productSlice.reducer;
