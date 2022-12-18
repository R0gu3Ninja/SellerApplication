import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlist";
import cartItemsReducer from "./cart";
import productDetailsReducer from "./productDetails";
import shopProfileReducer from "./shopProfile";
const globalStore = new configureStore({
  reducer: {
    wishListReducer: wishListReducer,
    cartItemsReducer: cartItemsReducer,
    productDetailsReducer: productDetailsReducer,
    shopProfileReducer: shopProfileReducer,
  },
});

export default globalStore;
