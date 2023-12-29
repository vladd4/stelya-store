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

export const fetchTextRu = createAsyncThunk("sale/fetchTextRu", async () => {
  const collectionRef = collection(db, "sale");
  const data = await getDocs(collectionRef);
  return data.docs[0].data().saleTextRu;
});

export const fetchTimer = createAsyncThunk("sale/fetchTimer", async () => {
  const collectionRef = collection(db, "sale");
  const data = await getDocs(collectionRef);
  return data.docs[0].data().timerDate;
});

const initialState = {
  showSale: true,
  saleImage: null,
  saleText: null,
  saleTextRu: null,
  isRu: false,
  timerDate: null,
  status: "loading",
};

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    setRu(state, action) {
      state.isRu = action.payload;
    },
  },
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
      })
      .addCase(fetchTextRu.pending, (state) => {
        state.saleTextRu = null;
        state.status = "loading";
      })
      .addCase(fetchTextRu.fulfilled, (state, action) => {
        state.saleTextRu = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchTextRu.rejected, (state) => {
        state.saleTextRu = null;
        state.status = "loading";
      })
      .addCase(fetchTimer.pending, (state) => {
        state.timerDate = null;
        state.status = "loading";
      })
      .addCase(fetchTimer.fulfilled, (state, action) => {
        state.timerDate = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchTimer.rejected, (state) => {
        state.timerDate = null;
        state.status = "loading";
      });
  },
});

export const { setRu } = saleSlice.actions;

export default saleSlice.reducer;
