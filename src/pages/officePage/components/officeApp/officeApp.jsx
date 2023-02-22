import React from "react";
import { useDispatch } from "react-redux";

import "./officeApp.css";

import WordIcon from "../../../../assets/office_icons/Word.svg";
import { setOfficeAppsShown } from "../../../../features/apps/appsSlice";

const OfficeApp = ({ icon, appName, href }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOfficeAppsShown(false));
  };
  return (
    <a
      className="office-page-app"
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      <img src={icon ?? WordIcon} alt={`${appName} Icon`} />
      <p>{appName ?? ""}</p>
    </a>
  );
};

export default OfficeApp;
