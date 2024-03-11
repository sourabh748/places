import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <li className="p-2">
      <Link className="flex" to="/browse/feed">
        <span className="mt-1">
          <IoCreateOutline />
        </span>
        <span>Feed</span>
      </Link>
    </li>
  );
};

export default Feed;
