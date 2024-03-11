import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Feed = ({className = ""}) => {
  return (
    <li className={`p-2 ${className}`}>
      <NavLink
        className={({ isActive }) =>
          `${isActive && `bg-blue-400`} flex p-1 rounded-lg`
        }
        to="/browse/feed"
      >
        <span className="mt-1">
          <IoCreateOutline />
        </span>
        <span>Feed</span>
      </NavLink>
    </li>
  );
};

export default Feed;
