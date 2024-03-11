import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import navReducer from "./slice/navbarSlice";
import postReducer from "./slice/postsSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
    nav: navReducer,
    posts: postReducer,
  },
});

export default store;
