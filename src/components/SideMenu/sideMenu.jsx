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
import { ReactComponent as EasistentIcon } from "../../assets/icons_for_menu/eA.svg";
import { ReactComponent as ArnesIcon } from "../../assets/icons_for_menu/arnes.svg";
import { ReactComponent as OfficeIcon } from "../../assets/icons_for_menu/office_365.svg";
import SideMenuProfile from "../SideMenuProfile/sideMenuProfile";

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
            icon={<EasistentIcon />}
          />
          <SideMenuLink
            href="/sio-mdm"
            title="SIO.MDM Prijava"
            icon={<OpenInNewOutlinedIcon />}
          />
          <SideMenuLink
            href="/arnes-ucilnice"
            title="Arnes Učilnice"
            icon={<ArnesIcon />}
          />
          <SideMenuLink title="Office Programi" icon={<OfficeIcon />} />
        </SideMenuCategory>
        <SideMenuCategory title={"ŠCVAPP"}>
          <SideMenuLink
            href="/nastavitve"
            title="Nastavitve"
            icon={<SettingsOutlinedIcon />}
          />
        </SideMenuCategory>
      </div>
      <div className="side-menu-down">
        <SideMenuProfile />
      </div>
    </div>
  );
};

export default SideMenu;
