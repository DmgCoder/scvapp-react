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
import { useUser } from "../../features/user/userHook";

const OfficePage = () => {
  const { sideMenuMini } = useSideMenu();
  const { user } = useUser();
  return (
    <div
      className="office-page"
      style={{
        width: `calc(100% - ${sideMenuMini ? "60px" : "250px"})`,
        left: `${sideMenuMini ? "60px" : "250px"}`,
      }}
    >
      <OfficeApp
        icon={WordIcon}
        appName="Word"
        href={`https://www.office.com/launch/word?auth=2&username=${user.mail}&login_hint=${user.mail}`}
      />
      <OfficeApp
        icon={ExcelIcon}
        appName="Excel"
        href={`https://www.office.com/launch/excel?auth=2&username=${user.mail}&login_hint=${user.mail}`}
      />
      <OfficeApp
        icon={PowerPointIcon}
        appName="PowerPoint"
        href={`https://www.office.com/launch/powerpoint?auth=2&username=${user.mail}&login_hint=${user.mail}`}
      />
      <OfficeApp
        icon={OutlookIcon}
        appName="Outlook"
        href={`https://outlook.office.com/owa/?realm=scv.si&exsvurl=1&ll-cc=1060&modurl=0&login_hint=${user.mail}`}
      />
      <OfficeApp
        icon={OneDriveIcon}
        appName="OneDrive"
        href={`https://scvsi-my.sharepoint.com/personal/${user.mail
          .replaceAll(".", "_")
          .replaceAll("@", "_")}/_layouts/15/onedrive.aspx?`}
      />
      <OfficeApp
        icon={TeamsIcon}
        appName="Teams"
        href={`https://aka.ms/mstfw?login_hint_safe=${user.mail}`}
      />
      <OfficeApp
        icon={OneNoteIcon}
        appName="OneNote"
        href={`https://www.office.com/launch/onenote?auth=2&username=${user.mail}&login_hint=${user.mail}`}
      />
      <OfficeApp
        icon={Office356Icon}
        appName="Office 365 portal"
        href={`https://www.office.com/?auth=2&username=${user.mail}&login_hint=${user.mail}`}
      />
    </div>
  );
};

export default OfficePage;
