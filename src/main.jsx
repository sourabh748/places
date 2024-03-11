import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BrowsePage from "./pages/BrowsePage";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./index.css";
import PostsLists from "./components/PostsLists";
import TestPage from "./pages/TestPage";
import FeedPage from "./pages/FeedPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginPage />} />
      <Route path="browse" element={<BrowsePage />}>
        <Route index element={<PostsLists />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
