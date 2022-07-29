import React, { useEffect } from "react";

import "./aboutPage.css";

import intro_picture from "../pictures/about_page/intro_picture.png";
import home_screen from "../pictures/about_page/home_screen.png";
import login_screen from "../pictures/about_page/login_screen.png";
import easistent_screen from "../pictures/about_page/easistent_screen.png";
import outro_screen from "../pictures/about_page/outro_screen.png";
import google_play_badge from "../pictures/about_page/google-play-badge.png";
import app_store_badge from "../pictures/about_page/app-store-badge.svg";

export default function AboutPage(props) {
  return (
    <div className="aboutPage-main">
      <div className="aboutPage-content">
        <div className="aboutPage-container">
          <p className="aboutPage-introText aboutPage-container-text aboutPage-container-ch-left">
            Aplikacija <b>ŠCVApp</b>:<br /> Aplikacija za dijake <br /> šolskega
            centra Velenje
          </p>
          <img
            src={intro_picture}
            alt=""
            className="aboutPage-container-ch-right"
          ></img>
        </div>
        <div className="aboutPage-container aboutPage-container-mini-r">
          <p className="aboutPage-container-text aboutPage-container-ch-left">
            Aplikacijo <b>ŠCVApp</b> sta ustvarila dijaka Blaž Osredkar in Urban
            Krepel v upanju, da bi združila vsa spletna orodja, potrebna za
            šolanje na eno, priročno mesto.
          </p>
          <img
            src={home_screen}
            alt=""
            className="aboutPage-container-image-phone aboutPage-container-ch-right"
          ></img>
        </div>
        <div className="aboutPage-container">
          <img
            src={easistent_screen}
            alt=""
            className="aboutPage-container-image-phone aboutPage-container-ch-left"
          ></img>
          <div className="aboutPage-container-text-list aboutPage-container-text aboutPage-container-ch-right">
            <p className="">
              Aplikacija vsebuje večino spletnih orodij, potrebnih za šolanje:{" "}
            </p>
            <ul>
              <li>eAsistent</li>
              <li>urniki</li>
              <li>domača stran šole</li>
              <li>portal malice </li>
              <li>dodatna orodja (Office, arnes učilnice,..)</li>
            </ul>
          </div>
          {/* <p className="aboutPage-container-text">
            Aplikacija vsebuje večino spletnih orodij, potrebnih za šolanje:
          </p> */}
        </div>
        <div className="aboutPage-container aboutPage-container-mini-r">
          <p className="aboutPage-container-text aboutPage-container-ch-left">
            <b>Preprosto, varno</b> <br /> <br /> <br />
            Prijava v aplikacijo poteka preko vpisa z šolskim Microsoft računom
          </p>
          <img
            src={login_screen}
            alt=""
            className="aboutPage-container-image-phone aboutPage-container-ch-right"
          ></img>
        </div>
        <div className="aboutPage-outro">
          <img
            src={outro_screen}
            alt=""
            className="aboutPage-outro-downloadimg"
          ></img>
          <p className="aboutPage-outro-text-small">
            Aplikacija je na voljo za mobilne naprave. Za dostop do ŠCVApp-a na
            računalniku obišči{" "}
            <a href="https://app.scv.si" target="_blank">
              https://app.scv.si
            </a>{" "}
            in se prijavi z svojim šolskim računom.
          </p>
          <p className="aboutPage-outro-text-big">
            Kaj še čakaš? Prenesi <b>ŠCVApp</b> na svojo mobilno napravo še
            danes!
          </p>
          <div className="aboutPage-outro-badges">
            <a
              href="https://play.google.com/store/apps/details?id=com.scvapp.si"
              className="aboutPage-outro-badges-google"
              target={"_blank"}
            >
              <img src={google_play_badge} alt="Google Play Badge" />
            </a>
            <a
              href="https://apps.apple.com/tz/app/scvapp/id1589939073"
              className="aboutPage-outro-badges-appstore"
              target={"_blank"}
            >
              <img src={app_store_badge} alt="App Store Badge" />
            </a>
          </div>
          <p className="aboutPage-outro-text-big">
            Imaš kakšno vprašanje? Piši nama na:{" "}
            <a href="mailto:info.app@scv.si">info.app@scv.si</a>
          </p>
        </div>
      </div>
    </div>
  );
}
