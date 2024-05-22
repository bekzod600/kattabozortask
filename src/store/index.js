import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./detailsSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice,
  },
});
