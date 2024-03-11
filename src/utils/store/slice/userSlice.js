import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInStatus: false,
    userData: "",
    token: "",
  },
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        state.loggedInStatus = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      }
    },

    logout: (state) => {
      state.loggedInStatus = false;
      state.userData = "";
      state.token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
