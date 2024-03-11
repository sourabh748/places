import React from "react";
import { useSelector } from "react-redux";

const SideBarWrapper = ({ children }) => {
  const sidebarStatus = useSelector((store) => store.nav);
  return (
    <div
      className={`fixed bg-blue-600 h-full font-bold transition-all ${!sidebarStatus ? `-left-28` : `left-0`}`}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default SideBarWrapper;
