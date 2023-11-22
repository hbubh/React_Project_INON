import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import themeSlice from "./themeSlice";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    nameSlice,
    counterSlice,
    themeSlice,
    authSlice,
  },
});

export default store;
