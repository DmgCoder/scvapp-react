import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import AdminDashboardItem from "../components/adminDashbordItem/adminDashboardItem";

import "./adminDashboard.css";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const AdminDashboard = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`admin-dashboard ${theme}`}>
      <div className="admin-dashboard-header">
        <div className="admin-dashboard-title">
          <AdminPanelSettingsIcon />
          <h1>Nadzorna plošča</h1>
        </div>
        <h2>Orodja</h2>
      </div>
      <div className="admin-dashboard-content">
        <AdminDashboardItem
          icon={<CalendarMonthIcon />}
          text="Urejanje urnikov"
          href="edit-schedule"
        />
        <AdminDashboardItem icon={<ExitToAppIcon />} text="Izhod" to="/" />
      </div>
    </div>
  );
};

export default AdminDashboard;
