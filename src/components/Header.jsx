import React from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import TopNav from "./TopNav";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <React.Fragment>
      <header className="sticky top-0 bg-sky-300 flex items-center justify-between sm:justify-evenly p-2">
        {window.innerWidth <= 500 && <Hamburger />}
        <div>
          <p className="font-canderville font-bold text-red-700 text-3xl">
            Places
          </p>
        </div>
        {window.innerWidth > 500 && <TopNav />}
        <div className="w-10">
          <p>{onlineStatus ? `🟢` : `🔴`}</p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
