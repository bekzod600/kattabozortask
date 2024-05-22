import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API fetch qilish uchun createAsyncThunk dan foydalanamiz
export const fetchDetails = createAsyncThunk(
  "details/fetchDetails",
  async () => {
    const response = await axios.get(
      `https://www.kattabozor.uz/hh/test/api/v1/offers`
    );
    return response.data;
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // getOneDetail: (state, action) => {
    //   return state.data.find((item) => item.id === action);
    // },
    // Boshqa reducers larni ham bu yerda qo'shish mumkin
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        console.log(action.payload.offers[0]);
        state.status = "succeeded";
        state.data = action.payload.offers;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error);
        state.error = action.error.message;
      });
  },
});

export const getOneDetail = (state, action) =>
  state.data.find((dt) => dt.id === action);

// export const { getOneDetail } = detailsSlice.actions;
export default detailsSlice.reducer;
