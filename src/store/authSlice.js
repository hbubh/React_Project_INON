import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userData: undefined,
  userData2: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
      state.userData2 = action;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
