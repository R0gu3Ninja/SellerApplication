import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: ["size:", "color:", "type:", "design:", "price:"],
    productImages: [],
  },
  reducers: {
    addProductDetails: (state, action) => {
      console.log(
        "Adding product Details to state object" + action.payload.item
      );

      console.log("Adding : " + action.payload.item);

      //      state.productDetails.push(action.payload.item);
      state.productDetails[action.payload.key] = action.payload.item;
      console.log(JSON.stringify(state.productDetails));
    },
    addProductImages: (state, action) => {
      console.log(
        "Adding product Images to state object" + action.payload.item
      );
      state.productImages.push(action.payload.item);
    },
  },
});

export const addProductDetails = productDetailsSlice.actions.addProductDetails;
export const addProductImages = productDetailsSlice.actions.addProductImages;
export default productDetailsSlice.reducer;
