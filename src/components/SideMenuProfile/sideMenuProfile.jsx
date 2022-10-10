import React from "react";
import ProfileImg from "../ProfileImg/profileImg";

import "./sideMenuProfile.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const SideMenuProfile = () => {
  return (
    <div className="side-menu-profile">
      <ProfileImg size={40} />
      <div className="side-menu-profile-info">
        <p className="side-menu-profile-name">Janez Novak</p>
        <p className="side-menu-profile-email">janez.novak@scv.si</p>
      </div>
      <PowerSettingsNewIcon
        className="side-menu-profile-logout"
        titleAccess="Odjava"
      />
    </div>
  );
};

export default SideMenuProfile;
