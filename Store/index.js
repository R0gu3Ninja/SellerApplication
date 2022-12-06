import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlist";
import cartItemsReducer from "./cart";
import productDetailsReducer from "./productDetails";
const globalStore = new configureStore({
  reducer: {
    wishListReducer: wishListReducer,
    cartItemsReducer: cartItemsReducer,
    productDetailsReducer: productDetailsReducer,
  },
});

export default globalStore;
