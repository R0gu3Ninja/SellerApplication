import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding item to cart state object" + action.payload.item);
      state.cartItems.push(action.payload.item);
    },
    removeFromCart: (state, action) => {
      console.log(
        "Removing items from cart state object ::: " + action.payload.item
      );
      state.cartItems.splice(state.cartItems.indexOf(action.payload.item), 1);
    },
  },
});

export const addToCart = cartItemsSlice.actions.addToCart;
export const removeFromCart = cartItemsSlice.actions.removeFromCart;
export default cartItemsSlice.reducer;
