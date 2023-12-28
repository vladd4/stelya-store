import { createSlice } from "@reduxjs/toolkit";
import Image from "../../assets/service-illustration/1/1.jpg";
import Image2 from "../../assets/service-illustration/1/2.jpg";
import Image3 from "../../assets/service-illustration/1/3.jpg";
import Image4 from "../../assets/service-illustration/1/4.jpg";

const initialState = {
  heading: "stelya_1_h",
  text: "stelya_1_p",
  images: [Image, Image2, Image3, Image4],
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
