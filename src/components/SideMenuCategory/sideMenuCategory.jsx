import React from "react";

import "./sideMenuCategory.css";

const SideMenuCategory = ({ children, title }) => {
  return (
    <div className="side-menu-category">
      <p className="side-menu-category-title">{title ?? ""}</p>
      {children}
    </div>
  );
};

export default SideMenuCategory;
