import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./adminDashboardItem.css";

const AdminDashboardItem = ({ icon, text, href, to }) => {
  const theme = useSelector(selectTheme);
  const [indicator, setIndicator] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith(`/admin/${href}`) && href !== "/") {
      setIndicator(true);
    } else if (location.pathname === "/admin" && href === "/") {
      setIndicator(true);
    } else {
      setIndicator(false);
    }
  }, [location]);

  return (
    <Link
      to={href ? `/admin/${href}` : to}
      className={`admin-dashboard-item ${theme}`}
    >
      <div className="admin-dashboard-item-icon">{icon}</div>
      <p className="admin-dashboard-item-text">{text}</p>
      {indicator ? (
        <div className="admin-dashboard-item-indicator"></div>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default AdminDashboardItem;
