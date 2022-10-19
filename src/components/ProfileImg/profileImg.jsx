import React from "react";
import StatusIcon from "../StatusIcon";

import "./profileImg.css";

const ProfileImg = ({ size }) => {
  return (
    <div className="profile-image" style={{ width: size, height: size }}>
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`}
        alt="Profile Picture"
      />
      <div className="profile-image-status">
        <StatusIcon />
      </div>
    </div>
  );
};

export default ProfileImg;
