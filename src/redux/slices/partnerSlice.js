import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchPartners = createAsyncThunk(
  "partner/fetchPartners",
  async (_, { getState }) => {
    const { images } = getState().partner;
    const partnersListRef = ref(storage, "partners/");
    try {
      const res = await listAll(partnersListRef);
      const uniqueUrls = new Set(images);

      for (const item of res.items) {
        const url = await getDownloadURL(item);
        uniqueUrls.add(url);
      }

      return Array.from(uniqueUrls);
    } catch (error) {
      console.error("Error in fetchPartners async thunk:", error);
      throw error;
    }
  }
);

const initialState = {
  images: [],
  status: "loading",
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.images = [];
        state.status = "loading";
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.images = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchPartners.rejected, (state) => {
        state.images = [];
        state.status = "loading";
      });
  },
});

export default partnerSlice.reducer;
