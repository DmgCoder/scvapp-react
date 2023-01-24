import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import { selectSideMenuOpen } from "../../../../features/sideMenu/sideMenuSlice";

import "./adminDashboardItem.css";
import SubItem from "./subItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AdminDashboardItem = ({
  icon,
  text,
  href,
  to,
  subitems,
  linkForSubItems,
}) => {
  const theme = useSelector(selectTheme);
  const [indicator, setIndicator] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const sideMenuOpen = useSelector(selectSideMenuOpen);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  useEffect(() => {
    if (location.pathname.startsWith(`/admin${href}`) && href !== "/") {
      setIndicator(true);
    } else if (location.pathname === "/admin/" && href === "/") {
      setIndicator(true);
    } else {
      setIndicator(false);
    }
  }, [location]);

  return (
    <div className={`admin-dashboard-item ${theme}`}>
      <Link
        to={href ? `/admin${href}` : to}
        className="admin-dashboard-item-main"
      >
        <div className="admin-dashboard-item-icon">{icon}</div>
        {sideMenuOpen && <p className="admin-dashboard-item-text">{text}</p>}
        {indicator ? (
          <div className="admin-dashboard-item-indicator"></div>
        ) : (
          <></>
        )}
        {subitems && sideMenuOpen ? (
          <KeyboardArrowDownIcon
            className={`admin-dashboard-item-arrow ${open ? "open" : ""}`}
            onClick={handleOpen}
          />
        ) : (
          <></>
        )}
      </Link>
      {subitems && sideMenuOpen && open ? (
        <ul className="admin-dashboard-item-subitems">
          {subitems.map((subitem, index) => (
            <SubItem
              key={index}
              link={`${linkForSubItems}${subitem}`}
              title={subitem}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminDashboardItem;
