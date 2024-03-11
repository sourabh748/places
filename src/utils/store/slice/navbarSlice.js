import { createSlice, current } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: false,
  reducers: {
    toggleNavBar: (state) => {
      return !state;
    },
  },
});

export const { toggleNavBar } = navSlice.actions;
export default navSlice.reducer;
