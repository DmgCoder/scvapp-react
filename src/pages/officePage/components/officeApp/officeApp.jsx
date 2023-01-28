import React from "react";

import "./officeApp.css";

import WordIcon from "../../../../assets/office_icons/Word.svg";

const OfficeApp = ({ icon, appName }) => {
  return (
    <div className="office-page-app">
      <img src={icon ?? WordIcon} alt={`${appName} Icon`} />
      <p>{appName ?? ""}</p>
    </div>
  );
};

export default OfficeApp;
