import React from "react";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";

import "./sideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
      {/* <div className="side-menu__logo"> */}
      <SideMenuCategory />
    </div>
  );
};

export default SideMenu;
