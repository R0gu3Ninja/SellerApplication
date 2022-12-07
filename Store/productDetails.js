import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: [
      "category",
      "size",
      "color",
      "type",
      "design",
      "price",
      "collar",
      "fabric",
    ],
    productImages: ["", ""],
  },
  reducers: {
    addProductDetails: (state, action) => {
      state.productDetails[action.payload.key] = action.payload.item;
      console.log(JSON.stringify(state.productDetails));
    },
    addProductImages: (state, action) => {
      state.productImages[action.payload.key] = action.payload.item;
    },
  },
});

export const addProductDetails = productDetailsSlice.actions.addProductDetails;
export const addProductImages = productDetailsSlice.actions.addProductImages;
export default productDetailsSlice.reducer;
