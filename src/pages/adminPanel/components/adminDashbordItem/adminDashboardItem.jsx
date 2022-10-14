import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./adminDashboardItem.css";

const AdminDashboardItem = ({ icon, text }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`admin-dashboard-item ${theme}`}>
      <div className="admin-dashboard-item-icon">{icon}</div>
      <p className="admin-dashboard-item-text">{text}</p>
    </div>
  );
};

export default AdminDashboardItem;
