import React from "react";
import OfficeApp from "./components/officeApp/officeApp";

import "./officePage.css";

import WordIcon from "../../assets/office_icons/Word.svg";
import ExcelIcon from "../../assets/office_icons/Excel.svg";
import PowerPointIcon from "../../assets/office_icons/Powerpoint.svg";
import OneNoteIcon from "../../assets/office_icons/OneNote.svg";
import OutlookIcon from "../../assets/office_icons/Outlook.svg";
import TeamsIcon from "../../assets/office_icons/Teams.svg";
import OneDriveIcon from "../../assets/office_icons/OneDrive.svg";
import Office356Icon from "../../assets/office_icons/Office365.svg";
import useSideMenu from "../../features/sideMenu/useSideMenu";

const OfficePage = () => {
  const { sideMenuMini } = useSideMenu();
  return (
    <div
      className="office-page"
      style={{
        width: `calc(100% - ${sideMenuMini ? "60px" : "250px"})`,
        left: `${sideMenuMini ? "60px" : "250px"}`,
      }}
    >
      <OfficeApp icon={WordIcon} appName="Word" />
      <OfficeApp icon={ExcelIcon} appName="Excel" />
      <OfficeApp icon={PowerPointIcon} appName="PowerPoint" />
      <OfficeApp icon={OutlookIcon} appName="Outlook" />
      <OfficeApp icon={OneDriveIcon} appName="OneDrive" />
      <OfficeApp icon={TeamsIcon} appName="Teams" />
      <OfficeApp icon={OneNoteIcon} appName="OneNote" />
      <OfficeApp icon={Office356Icon} appName="Office 365 portal" />
    </div>
  );
};

export default OfficePage;
