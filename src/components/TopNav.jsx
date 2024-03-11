import React from "react";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import SignOut from "./SignOut";

const TopNav = () => {
  return (
    <div>
      <ul className="flex font-bold">
        <Home />
        <Feed />
        <Profile />
        <SignOut />
      </ul>
    </div>
  );
};

export default TopNav;
