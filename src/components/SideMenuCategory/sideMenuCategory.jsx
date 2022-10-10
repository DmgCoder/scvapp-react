import React from "react";
import SideMenuLink from "../SideMenuLink/sideMenuLink";

import "./sideMenuCategory.css";

const SideMenuCategory = () => {
  return (
    <div className="side-menu-category">
      <p>Naslov kategorije</p>
      <SideMenuLink />
    </div>
  );
};

export default SideMenuCategory;
