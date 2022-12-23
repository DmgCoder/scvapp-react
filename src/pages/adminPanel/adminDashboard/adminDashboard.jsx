import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";

import "./adminDashboard.css";

import AppLogo from "../../../assets/app_logo.png";
import DashboardItem from "../components/adminDashbordItem/adminDashboardItem";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SideMenuProfile from "../../../components/SideMenuProfile/sideMenuProfile";

const AdminDashboard = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`admin-dashboard ${theme}`}>
      <img
        src={AppLogo}
        alt="application logo"
        className="admin-dashboard-logo"
      />
      <div className="admin-dashboard-items">
        <DashboardItem icon={<HomeIcon />} text="Domača stran" href="/" />
        <DashboardItem
          icon={<CalendarMonthIcon />}
          text="Urejanje urnikov"
          href="/schedule-edit"
          subitems={["ERŠ", "ŠSD", "GIM", "ŠSGO"]}
          linkForSubItems="schedule-edit/"
        />
        <DashboardItem
          icon={<MeetingRoomIcon />}
          text="DoorControll"
          href="/door-pass"
        />
      </div>
      <div className="admin-dashboard-bottom">
        <div className="admin-dashboard-bottom-line"></div>
        <SideMenuProfile />
      </div>
    </div>
  );
};

export default AdminDashboard;
