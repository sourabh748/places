import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {},
  reducers: {
    setPosts: (state, action) => {
      state = { ...action.payload, ...state };
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
