import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlist";
const globalStore = new configureStore({
  reducer: { wishListReducer: wishListReducer },
});

export default globalStore;
