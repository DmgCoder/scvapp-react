import React from "react";
import StatusIcon from "../StatusIcon";

import "./profileImg.css";

const ProfileImg = ({ size }) => {
  return (
    <div className="profile-image" style={{ width: size, height: size }}>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile Picture"
      />
      <div className="profile-image-status">
        <StatusIcon name="unknown" />
      </div>
    </div>
  );
};

export default ProfileImg;
