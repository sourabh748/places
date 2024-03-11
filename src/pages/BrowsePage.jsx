import React, { useEffect } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const BrowsePage = () => {
  return (
    <React.Fragment>
      <Header />
      {window.innerWidth <= 500 && <SideNav />}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default BrowsePage;
