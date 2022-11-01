import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./aboutAppItem.css";

import SettingsItem from "../settingsItem/settingsItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutAppItem = () => {
  const [show, setShow] = React.useState(false);
  const theme = useSelector(selectTheme);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div
      className={`settings-about-app-item ${
        show ? "settings-about-app-item-show" : ""
      }`}
    >
      <SettingsItem title={"O aplikaciji ŠCVApp:"}>
        <ArrowForwardIosIcon
          className="settings-about-app-item-downbtn"
          onClick={handleToggle}
        />
      </SettingsItem>
      <div className={`settings-about-app-item-content ${theme}`}>
        Aplikacija je bila ustvarjena v sklopu raziskovalne naloge, leta 2022.
        Namenjena je dijakom in zaposlenim na ŠC Velenje. Ustanovitelja
        aplikacije sta <b>Urban Krepel</b> in <b>Blaž Osredkar</b>. <br />
        <br />
        Navodila, kako uporabljati aplikacijo, imate na{" "}
        <a className="settingsPage-main-settings-link">tej povezavi</a> (YouTube
        video).
        <br />
        <br />
        <br />
        <br />
        Za več informacij pišite na:{" "}
        <a
          className="settingsPage-main-settings-link"
          href={"mailto:info.app@scv.si"}
        >
          info.app@scv.si
        </a>
      </div>
    </div>
  );
};

export default AboutAppItem;
