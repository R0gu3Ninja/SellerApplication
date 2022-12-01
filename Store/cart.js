import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalAmount: 0, totalDiscount: 0 },
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding item to cart state object" + action.payload.item);
      state.totalAmount += action.payload.item.price;
      state.totalDiscount += action.payload.item.discountPrice;
      console.log(
        "totalAmount :: " +
          state.totalAmount +
          " totalDiscount :: " +
          state.totalDiscount
      );
      state.cartItems.push(action.payload.item);
    },
    removeFromCart: (state, action) => {
      console.log(
        "Removing items from cart state object ::: " + action.payload.item
      );
      state.cartItems.splice(state.cartItems.indexOf(action.payload.item), 1);
      state.totalAmount -= action.payload.item.price;
      state.totalDiscount -= action.payload.item.discountPrice;
    },
  },
});

export const addToCart = cartItemsSlice.actions.addToCart;
export const removeFromCart = cartItemsSlice.actions.removeFromCart;
export default cartItemsSlice.reducer;
