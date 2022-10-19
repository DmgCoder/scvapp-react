import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./adminDashboardItem.css";

const AdminDashboardItem = ({ icon, text, href, to }) => {
  const theme = useSelector(selectTheme);
  return (
    <Link
      to={href ? `/admin/${href}` : to}
      className={`admin-dashboard-item ${theme}`}
    >
      <div className="admin-dashboard-item-icon">{icon}</div>
      <p className="admin-dashboard-item-text">{text}</p>
    </Link>
  );
};

export default AdminDashboardItem;
