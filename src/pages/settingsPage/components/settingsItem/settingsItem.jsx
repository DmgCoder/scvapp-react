import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./settingsItem.css";

const SettingsItem = ({ title, text, children }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`settingsItem ${theme}`}>
      <p className="settingsItem-title">{title}</p>
      {text ? <p className="settingsItem-text">{text}</p> : children}
    </div>
  );
};

export default SettingsItem;
