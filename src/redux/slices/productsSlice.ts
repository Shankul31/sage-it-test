import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: [
    {
      id: 1,
      brandName: "Coral",
      heading: "Collections",
      subtitle1:
        "you can explore and shop many differnt collection from various barands here.",
      subtitle2: "Explore new and popular styles",
    },
  ],
  navigationItems: [
    { title: "Jewelry & Accessories", value: "" },
    { title: "Clothing & Shoes", value: "" },
    { title: "Home & Living", value: "" },
    { title: "Wedding & Party", value: "" },
    { title: "Toys & Entertainment", value: "" },
    { title: "Art & Collectibles", value: "" },
    { title: "Craft Supplies & Tools", value: "" },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
