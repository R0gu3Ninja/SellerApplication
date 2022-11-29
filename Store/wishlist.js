import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: { wishListItems: [] },
  reducers: {
    addToWishList: (state, action) => {
      console.log("Adding item to wishlist state object" + action.payload.item);
      state.wishListItems.push(action.payload.item);
    },
    removeFromWishList: (state, action) => {
      console.log(
        "Removing items from wishlist state object ::: " + action.payload.item
      );
      state.wishListItems.splice(
        state.wishListItems.indexOf(action.payload.item),
        1
      );
    },
  },
});

export const addToWishList = wishListSlice.actions.addToWishList;
export const removeFromWishList = wishListSlice.actions.removeFromWishList;
export default wishListSlice.reducer;
