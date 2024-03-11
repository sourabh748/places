import React from "react";
import authProvider from "../app/auth";
import { useDispatch } from "react-redux";
import { logout } from "../utils/store/slice/userSlice";

const SignOut = () => {
  const dispatch = useDispatch();
  const handelLogout = () => {
    authProvider.authLogout();
    dispatch(logout());
  };
  return (
    <li className="p-2">
      <button onClick={handelLogout} type="button">
        Signout
      </button>
    </li>
  );
};

export default SignOut;
