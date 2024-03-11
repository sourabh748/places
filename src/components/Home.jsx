import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <li className="p-2">
      <Link className="flex" to="/browse">
        <span className="mt-1">
          <FaHome />
        </span>
        <span>Home</span>
      </Link>
    </li>
  );
};

export default Home;
