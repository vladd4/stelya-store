import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchIsEmpty = createAsyncThunk("sale/fetchIsEmpty", async () => {
  const collectionRef = collection(db, "sale");
  const data = await getDocs(collectionRef);
  return data.docs[0].data().showSale;
});

export const fetchImage = createAsyncThunk("sale/fetchImage", async () => {
  const collectionRef = collection(db, "sale");
  const data = await getDocs(collectionRef);
  return data.docs[0].data().saleImage;
});

export const fetchText = createAsyncThunk("sale/fetchText", async () => {
  const collectionRef = collection(db, "sale");
  const data = await getDocs(collectionRef);
  return data.docs[0].data().saleText;
});

const initialState = {
  showSale: true,
  saleImage: null,
  saleText: null,
  status: "loading",
};

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIsEmpty.pending, (state) => {
        state.showSale = null;
        state.status = "loading";
      })
      .addCase(fetchIsEmpty.fulfilled, (state, action) => {
        state.showSale = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchIsEmpty.rejected, (state) => {
        state.showSale = null;
        state.status = "loading";
      })
      .addCase(fetchImage.pending, (state) => {
        state.saleImage = null;
        state.status = "loading";
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.saleImage = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchImage.rejected, (state) => {
        state.saleImage = null;
        state.status = "loading";
      })
      .addCase(fetchText.pending, (state) => {
        state.saleText = null;
        state.status = "loading";
      })
      .addCase(fetchText.fulfilled, (state, action) => {
        state.saleText = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchText.rejected, (state) => {
        state.saleText = null;
        state.status = "loading";
      });
  },
});

export default saleSlice.reducer;
