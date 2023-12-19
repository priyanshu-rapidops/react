import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
