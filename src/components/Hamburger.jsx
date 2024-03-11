import React from "react";
import hamburger from "/hamburger.png";
import { useDispatch } from "react-redux";
import { toggleNavBar } from "../utils/store/slice/navbarSlice";

const Hamburger = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleNavBar())}
      className="cursor-pointer w-8"
    >
      <img src={hamburger} alt="No image" />
    </div>
  );
};

export default Hamburger;
