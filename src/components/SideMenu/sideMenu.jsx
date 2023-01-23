import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import { selectTheme } from "../../features/theme/themeSlice";
import SideMenuLink from "../SideMenuLink/sideMenuLink";
import SideMenuProfile from "../SideMenuProfile/sideMenuProfile";
import SideMenuSchedule from "../SideMenuSchedule/sideMenuSchedule";
import { selectUser } from "../../features/user/userSlice";

import "./sideMenu.css";

import AppLogo from "../../assets/app_logo.png";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { ReactComponent as EasistentIcon } from "../../assets/icons_for_menu/eA.svg";
import { ReactComponent as ArnesIcon } from "../../assets/icons_for_menu/arnes.svg";
import { ReactComponent as OfficeIcon } from "../../assets/icons_for_menu/office_365.svg";
import useSideMenu from "../../features/sideMenu/useSideMenu";

const SideMenu = () => {
  const theme = useSelector(selectTheme);
  const { sideMenuOpen, sideMenuMini, toggleSideMenu } = useSideMenu();
  const user = useSelector(selectUser);

  return (
    <>
      {sideMenuMini && <div className="side-menu-spacer"></div>}
      <div
        className={`side-menu ${theme} ${!sideMenuOpen && "side-menu-closed"} ${
          sideMenuMini && "side-menu-mini"
        }`}
      >
        <div className="side-menu-up">
          <img
            className="side-menu-logo"
            alt="App Logo"
            src={AppLogo}
            onClick={toggleSideMenu}
          />
          <SideMenuCategory title={"SPLETNE STRANI ŠCV"} miniTitle="ŠCV">
            <SideMenuLink href="/" title="Domača stran" />
            <SideMenuLink
              href="/malice"
              title="Malice"
              icon={<LocalDiningIcon />}
            />
          </SideMenuCategory>
          <SideMenuCategory title={"OSTALE SPLETNE STRAN"} miniTitle="OSTALO">
            <SideMenuLink
              href="/easistent"
              title="eAsistent"
              icon={<EasistentIcon />}
            />
            <SideMenuLink
              href="https://mdm.arnes.si/Prijava/Login.aspx"
              title="SIO.MDM Prijava"
              icon={<OpenInNewOutlinedIcon />}
              newTab
            />
            <SideMenuLink
              href="/arnes-ucilnice"
              title="Arnes Učilnice"
              icon={<ArnesIcon />}
            />
            <SideMenuLink title="Office Programi" icon={<OfficeIcon />} />
          </SideMenuCategory>
          <SideMenuCategory title={"ŠCVAPP"} miniTitle="ŠCVAPP">
            <SideMenuLink
              href="/nastavitve"
              title="Nastavitve"
              icon={<SettingsOutlinedIcon />}
            />
            {user?.isAdmin && (
              <SideMenuLink
                href="/admin"
                title="Admin Portal"
                icon={<AdminPanelSettingsIcon />}
              />
            )}
          </SideMenuCategory>
          <SideMenuSchedule />
        </div>
        <div className="side-menu-down">
          <SideMenuProfile />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
