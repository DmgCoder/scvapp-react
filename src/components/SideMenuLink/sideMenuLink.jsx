import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/user/userSlice";

import HouseIcon from "@mui/icons-material/House";

import "./sideMenuLink.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SideMenuLink = ({ href, title, icon }) => {
  const user = useSelector(selectUser);
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
      style={selected ? { backgroundColor: user?.school?.color } : {}}
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
