import React from "react";
import authProvider from "../app/auth";
import { useDispatch } from "react-redux";
import { logout } from "../utils/store/slice/userSlice";
import { FaSignOutAlt } from "react-icons/fa";

const SignOut = ({ className = "" }) => {
  const dispatch = useDispatch();
  const handelLogout = () => {
    authProvider.authLogout();
    dispatch(logout());
  };
  return (
    <li className={`p-2 ${className}`}>
      <button onClick={handelLogout} type="button">
        <span>
          <FaSignOutAlt className="inline-block mr-1" />
        </span>
        <span>SignOut</span>
      </button>
    </li>
  );
};

export default SignOut;
