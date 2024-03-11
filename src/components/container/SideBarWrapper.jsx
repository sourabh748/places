import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavBar } from "../../utils/store/slice/navbarSlice";

const SideBarWrapper = ({ children }) => {
  const sidebarStatus = useSelector((store) => store.nav);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleNavBar())}
      className={`fixed w-full h-full font-bold transition-all ${!sidebarStatus ? `-left-[100%]` : `left-[0%]`}`}
    >
      <div className="bg-slate-500 w-[40%] h-full">
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default SideBarWrapper;
