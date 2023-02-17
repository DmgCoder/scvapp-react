import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";
import { selectUser } from "../../features/user/userSlice";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import SideMenuLink from "../SideMenuLink/sideMenuLink";
import SideMenuProfile from "../SideMenuProfile/sideMenuProfile";
import SideMenuSchedule from "../SideMenuSchedule/sideMenuSchedule";

import "./sideMenu.css";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppLogo from "../../assets/app_logo.png";
import { ReactComponent as ArnesIcon } from "../../assets/icons_for_menu/arnes.svg";
import { ReactComponent as EasistentIcon } from "../../assets/icons_for_menu/eA.svg";
import { ReactComponent as OfficeIcon } from "../../assets/icons_for_menu/office_365.svg";
import {
  selectOfficeAppsShown,
  setOfficeAppsShown,
} from "../../features/apps/appsSlice";
import useSideMenu from "../../features/sideMenu/useSideMenu";

const SideMenu = () => {
  const theme = useSelector(selectTheme);
  const { sideMenuOpen, sideMenuMini, toggleSideMenu } = useSideMenu();
  const user = useSelector(selectUser);
  const officeAppsShown = useSelector(selectOfficeAppsShown);
  const dispatch = useDispatch();

  const handleOfficeClick = () => {
    dispatch(setOfficeAppsShown(!officeAppsShown));
  };

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
            <SideMenuLink
              title="Office Programi"
              icon={<OfficeIcon />}
              onClick={handleOfficeClick}
              itemSelected={officeAppsShown}
            />
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
