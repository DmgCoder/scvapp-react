import React from "react";

import HouseIcon from "@mui/icons-material/House";

import "./sideMenuLink.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SideMenuLink = ({ href, title, icon }) => {
  const [selected, setSelected] = React.useState(false);
  const location = useLocation();
  const getSelected = () => {
    if (location.pathname.startsWith(href) && href !== "/") {
      setSelected(true);
    } else if (location.pathname === "/" && href === "/") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  useEffect(getSelected, [location, href]);
  return (
    <div
      className={`side-menu-link`}
      style={selected ? { backgroundColor: "#0094D9" } : {}}
    >
      <div
        className={`side-menu-link-icon ${
          selected && "side-menu-link-selected"
        }`}
      >
        {icon ?? <HouseIcon />}
      </div>
      <Link
        to={href ?? "/"}
        className={`side-menu-link-title ${
          selected && "side-menu-link-selected"
        }`}
      >
        {title ?? ""}
      </Link>
    </div>
  );
};

export default SideMenuLink;
