import React from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../components/ProfileImg/profileImg";
import SchoolImg from "../../components/SchoolImg";
import { selectTheme } from "../../features/theme/themeSlice";
import { selectUser } from "../../features/user/userSlice";
import AboutAppItem from "./components/aboutAppItem/aboutAppItem";
import ChangeStatus from "./components/changeStatus/changeStatus";
import ChangeTheme from "./components/changeTheme/changeTheme";
import SettingsItem from "./components/settingsItem/settingsItem";

import "./settingsPage.css";

const SettingsPage = () => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  return (
    <div className={`settingsPage ${theme}`}>
      <div className="settingsPage-main">
        <div className="settingsPage-main-profile">
          <ProfileImg size={150} />
          <SchoolImg />
        </div>
        <div className="settingsPage-main-settings">
          <SettingsItem title={"Vaš status:"}>
            <ChangeStatus />
          </SettingsItem>
          <SettingsItem title={"Vaš e-naslov:"} text={user?.mail ?? "/"} />
          <SettingsItem
            title={"Telefonska številka:"}
            text={user?.mobilePhone ?? "/"}
          />
          <SettingsItem title={"Tema aplikacije:"}>
            <ChangeTheme />
          </SettingsItem>
          <SettingsItem title={"Dodatne informacije o vas:"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href={`https://eur.delve.office.com/?u=${user?.id}&v=editprofile`}
              className="settingsPage-main-settings-link"
            >
              Kliknite tukaj za odpiranje portala Office
            </a>
          </SettingsItem>
          <AboutAppItem />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
