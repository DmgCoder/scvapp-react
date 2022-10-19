import React from "react";
import { useSelector } from "react-redux";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";

import "./sideMenuCategory.css";

const SideMenuCategory = ({ children, title, miniTitle }) => {
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  return (
    <div
      className={`side-menu-category ${
        !sideMenuOpen && "side-menu-category-mini"
      }`}
    >
      <p className="side-menu-category-title">
        {sideMenuOpen ? title : miniTitle ?? ""}
      </p>
      {children}
    </div>
  );
};

export default SideMenuCategory;
