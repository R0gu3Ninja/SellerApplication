import { createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase";
const shopProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    phone: "",
    address: "Railway Station Road",
    shopId: "12345",
    shopName: "XLent",
    shopDescription: "Exclusive showroom for Kurtas,Pants,Pyjamas",
  },
  reducers: {
    loadShopProfile: (state, action) => {
      console.log("Loading shop profile");
      state.address = action.payload.address;
      state.shopId = action.payload.shopId;
      state.shopName = action.payload.shopName;
      state.phone = action.payload.phone;
      state.shopDescription = action.payload.shopDescription;
      console.log("shopProfile Population complete");
    },
  },
});

export const loadShopProfile = shopProfileSlice.actions.loadShopProfile;
export default shopProfileSlice.reducer;
