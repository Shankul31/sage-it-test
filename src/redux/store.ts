import { configureStore } from "@reduxjs/toolkit";
import { prodouctSlice } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: prodouctSlice,
  },
});

export default store;
