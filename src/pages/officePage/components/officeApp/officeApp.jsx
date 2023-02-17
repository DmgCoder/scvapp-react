import React from "react";

import "./officeApp.css";

import WordIcon from "../../../../assets/office_icons/Word.svg";

const OfficeApp = ({ icon, appName, href }) => {
  return (
    <a className="office-page-app" href={href} target="_blank" rel="noreferrer">
      <img src={icon ?? WordIcon} alt={`${appName} Icon`} />
      <p>{appName ?? ""}</p>
    </a>
  );
};

export default OfficeApp;
