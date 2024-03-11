import React, { useEffect } from "react";
import SideBarWrapper from "./container/SideBarWrapper";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import SignOut from "./SignOut";
import {
  SIDE_NAV_UTILITY_CLASS,
  SIDE_NAV_UTILITY_CLASS_EXTENDED,
} from "../utils/constants";

const SideNav = () => {
  return (
    <SideBarWrapper>
      <Home className={SIDE_NAV_UTILITY_CLASS} />
      <Feed className={SIDE_NAV_UTILITY_CLASS_EXTENDED} />
      <Profile className={SIDE_NAV_UTILITY_CLASS_EXTENDED} />
      <SignOut className={SIDE_NAV_UTILITY_CLASS_EXTENDED} />
    </SideBarWrapper>
  );
};

export default SideNav;
