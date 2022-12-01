import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlist";
import cartItemsReducer from "./cart";
const globalStore = new configureStore({
  reducer: {
    wishListReducer: wishListReducer,
    cartItemsReducer: cartItemsReducer,
  },
});

export default globalStore;
