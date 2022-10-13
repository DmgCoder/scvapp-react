import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import { selectTheme } from "../../features/theme/themeSlice";
import SideMenuLink from "../SideMenuLink/sideMenuLink";
import {
  selectSideMenuMini,
  selectSideMenuOpen,
  setMiniSideMenu,
  setOpenSideMenu,
} from "../../features/sideMenu/sideMenuSlice";
import useWindowDimensions from "../../features/useWindowDimensions";
import SideMenuProfile from "../SideMenuProfile/sideMenuProfile";
import { useEffect } from "react";
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

const SideMenu = () => {
  const theme = useSelector(selectTheme);
  const { width } = useWindowDimensions();
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  const sideMenuMini = useSelector(selectSideMenuMini);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const resizeSideMenu = () => {
    if (width <= 1080) {
      dispatch(setMiniSideMenu(true));
    } else {
      dispatch(setMiniSideMenu(false));
      dispatch(setOpenSideMenu(true));
    }
  };

  const resizeOnLoad = () => {
    if (width <= 1080) {
      dispatch(setMiniSideMenu(true));
      dispatch(setOpenSideMenu(false));
    } else {
      dispatch(setMiniSideMenu(false));
      dispatch(setOpenSideMenu(true));
    }
  };

  const toggleSideMenu = () => {
    if (sideMenuMini) {
      dispatch(setOpenSideMenu(!sideMenuOpen));
    } else {
      dispatch(setOpenSideMenu(true));
    }
  };

  useEffect(resizeSideMenu, [width]);
  useEffect(resizeOnLoad, []);

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
