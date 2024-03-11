import React from "react";
import SideBarWrapper from "./container/SideBarWrapper";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import SignOut from "./SignOut";

const SideNav = () => {
  return (
    <SideBarWrapper>
      <Home />
      <Feed />
      <Profile />
      <SignOut />
    </SideBarWrapper>
  );
};

export default SideNav;
