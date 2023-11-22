import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "inon",
};

const nameSlice = createSlice({
  name: "name2",
  initialState,
  reducers: {},
});
export const nameActions = nameSlice.actions;

export default nameSlice.reducer;
