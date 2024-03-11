import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = ({ className = "" }) => {
  return (
    <li className={`p-2 ${className}`}>
      <NavLink
        className={({ isActive }) =>
          `${isActive && `bg-blue-400`} flex p-1 rounded-lg`
        }
        to="/browse"
      >
        <span className="mt-1">
          <FaHome />
        </span>
        <span>Home</span>
      </NavLink>
    </li>
  );
};

export default Home;
