import React from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <li className="p-2">
      <Link className="flex" to="/">
        <span className="mt-1">
          <GiPlagueDoctorProfile />
        </span>
        <span>Profile</span>
      </Link>
    </li>
  );
};

export default Profile;
