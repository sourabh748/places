import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import authProvider from "./app/auth";
import { useDispatch } from "react-redux";
import { login } from "./utils/store/slice/userSlice";

const App = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const googleAuthState = onAuthStateChanged(authProvider.auth, (user) => {
      if (user) {
        dispatch(login({ token: user.accessToken, user: user }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => {
      googleAuthState();
    };
  }, []);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
