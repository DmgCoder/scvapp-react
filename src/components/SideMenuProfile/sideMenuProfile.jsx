import React from "react";
import ProfileImg from "../ProfileImg/profileImg";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";

import "./sideMenuProfile.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const SideMenuProfile = () => {
  const user = useSelector(selectUser);
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.assign(
      `${process.env.REACT_APP_BACKEND_URL}/user/logoutUrl/`
    );
  };

  return (
    <div className="side-menu-profile">
      <ProfileImg size={40} />
      {sideMenuOpen && (
        <div className="side-menu-profile-info">
          <p className="side-menu-profile-name">{user?.displayName}</p>
          <p className="side-menu-profile-email">{user?.mail}</p>
        </div>
      )}
      {sideMenuOpen && (
        <PowerSettingsNewIcon
          onClick={handleLogout}
          className="side-menu-profile-logout"
          titleAccess="Odjava"
        />
      )}
    </div>
  );
};

export default SideMenuProfile;
