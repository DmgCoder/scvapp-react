import React from "react";
import { useSelector } from "react-redux";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import { selectTheme } from "../../features/theme/themeSlice";
import SideMenuLink from "../SideMenuLink/sideMenuLink";

import "./sideMenu.css";

import AppLogo from "../../assets/app_logo.png";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import eAsistentIcon from "../../assets/icons_for_menu/eA.svg";
import arnesIcon from "../../assets/icons_for_menu/arnes.svg";
import officeIcon from "../../assets/icons_for_menu/office_365.svg";

const SideMenu = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`side-menu ${theme}`}>
      <div className="side-menu-up">
        <img className="side-menu-logo" alt="App Logo" src={AppLogo} />
        <SideMenuCategory title={"SPLETNE STRANI ŠCV"}>
          <SideMenuLink href="/" title="Domača stran" />
          <SideMenuLink
            href="/malica"
            title="Malice"
            icon={<LocalDiningIcon />}
          />
        </SideMenuCategory>
        <SideMenuCategory title={"OSTALE SPLETNE STRAN"}>
          <SideMenuLink
            href="/easistent"
            title="eAsistent"
            icon={<img src={eAsistentIcon} alt="eAsistent icon" />}
          />
          <SideMenuLink
            href="/sio-mdm"
            title="SIO.MDM Prijava"
            icon={<OpenInNewOutlinedIcon />}
          />
          <SideMenuLink
            href="/arnes-ucilnice"
            title="Arnes Učilnice"
            icon={<img src={arnesIcon} alt="Arnes Icon" />}
          />
          <SideMenuLink
            title="Office Programi"
            icon={<img src={officeIcon} alt="Office 365 Icon" />}
          />
        </SideMenuCategory>
        <SideMenuCategory title={"ŠCVAPP"}>
          <SideMenuLink
            href="/nastavitve"
            title="Nastavitve"
            icon={<SettingsOutlinedIcon />}
          />
        </SideMenuCategory>
      </div>
    </div>
  );
};

export default SideMenu;
