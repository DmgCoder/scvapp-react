import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import { Link } from "react-router-dom";

import "./adminDashboard.css";

import AppLogo from "../../../assets/app_logo.png";
import DashboardItem from "../components/adminDashbordItem/adminDashboardItem";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SideMenuProfile from "../../../components/SideMenuProfile/sideMenuProfile";
import CancelIcon from "@mui/icons-material/Cancel";
import useSideMenu from "../../../features/sideMenu/useSideMenu";

const AdminDashboard = () => {
  const theme = useSelector(selectTheme);
  const { sideMenuOpen, sideMenuMini, toggleSideMenu } = useSideMenu();
  return (
    <>
      {sideMenuMini && <div className="admin-dashboard-spacer"></div>}
      <div
        className={`admin-dashboard ${theme} ${
          !sideMenuOpen ? "admin-dashboard-minimized" : ""
        } ${sideMenuMini ? "admin-dashboard-mini" : ""}`}
      >
        <img
          src={AppLogo}
          alt="application logo"
          className="admin-dashboard-logo"
          onClick={toggleSideMenu}
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
          <Link to="/" className="admin-dashboard-exit">
            <CancelIcon />
            <p>Izhod iz plošče</p>
          </Link>
          <div className="admin-dashboard-bottom-line"></div>
          <SideMenuProfile />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
