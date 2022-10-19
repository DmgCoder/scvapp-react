import React from "react";

const DropdownItem = ({ icon, text, onClick }) => {
  return (
    <div className="top-menu-dropdown-item" onClick={onClick}>
      <div className="top-menu-dropdown-item__icon">{icon}</div>
      <p className="top-menu-dropdown-item__text">{text}</p>
    </div>
  );
};

export default DropdownItem;
