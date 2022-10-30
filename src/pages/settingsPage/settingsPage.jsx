import React from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../components/ProfileImg/profileImg";
import SchoolImg from "../../components/SchoolImg";
import { selectTheme } from "../../features/theme/themeSlice";

import "./settingsPage.css";

const SettingsPage = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`settingsPage ${theme}`}>
      <div className="settingsPage-main">
        <div className="settingsPage-main-profile">
          <ProfileImg size={150} />
          <SchoolImg />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
