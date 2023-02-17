import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

import HouseIcon from "@mui/icons-material/House";

import "./sideMenuLink.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";

const SideMenuLink = ({ href, title, icon, newTab, onClick, itemSelected }) => {
  const user = useSelector(selectUser);
  const [selected, setSelected] = React.useState(false);
  const location = useLocation();
  const sideMenuOpen = useSelector(selectSideMenuOpen);

  const getSelected = () => {
    if (location.pathname.startsWith(href) && href !== "/") {
      setSelected(true);
    } else if (location.pathname === "/" && href === "/") {
      setSelected(true);
    } else {
      setSelected(false);
    }
    if (itemSelected) {
      setSelected(itemSelected);
    }
  };
  useEffect(getSelected, [location, href, itemSelected]);
  return onClick ? (
    <div
      onClick={onClick}
      className={`side-menu-link ${!sideMenuOpen && "side-menu-link-mini"}`}
      style={selected ? { backgroundColor: user?.school?.color } : {}}
    >
      <SideMenuContent
        selected={selected}
        sideMenuOpen={sideMenuOpen}
        icon={icon}
        title={title}
      />
    </div>
  ) : !newTab ? (
    <Link
      to={href ?? "/"}
      className={`side-menu-link ${!sideMenuOpen && "side-menu-link-mini"}`}
      style={selected ? { backgroundColor: user?.school?.color } : {}}
    >
      <SideMenuContent
        selected={selected}
        sideMenuOpen={sideMenuOpen}
        icon={icon}
        title={title}
      />
    </Link>
  ) : (
    <a
      href={href ?? "/"}
      className={`side-menu-link ${!sideMenuOpen && "side-menu-link-mini"}`}
      style={selected ? { backgroundColor: user?.school?.color } : {}}
      target="_blank"
      rel="noreferrer"
    >
      <SideMenuContent
        selected={selected}
        sideMenuOpen={sideMenuOpen}
        icon={icon}
        title={title}
      />
    </a>
  );
};

const SideMenuContent = ({ selected, sideMenuOpen, icon, title }) => {
  return (
    <>
      <div
        className={`side-menu-link-icon ${
          selected && "side-menu-link-selected"
        }`}
      >
        {icon ?? <HouseIcon />}
      </div>
      {sideMenuOpen && (
        <p
          className={`side-menu-link-title ${
            selected && "side-menu-link-selected"
          }`}
        >
          {title ?? ""}
        </p>
      )}
    </>
  );
};

export default SideMenuLink;
