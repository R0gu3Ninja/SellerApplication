import { configureStore } from "@reduxjs/toolkit";

const loginReducer = (state = { isLoggedIn: false }, action) => {
  console.log("Insided loginReducer fn :");
};
const globalStore = new configureStore({ reducer: loginReducer });

export default globalStore;
