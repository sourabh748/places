import React from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Profile = ({ className = "" }) => {
  return (
    <li className={`p-2 ${className}`}>
      <NavLink
        className={({ isActive }) =>
          `${isActive && `bg-blue-400`} flex p-1 rounded-lg`
        }
        to="/browse/profile"
      >
        <span className="mt-1">
          <GiPlagueDoctorProfile />
        </span>
        <span>Profile</span>
      </NavLink>
    </li>
  );
};

export default Profile;
