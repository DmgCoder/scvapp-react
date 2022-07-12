import React from "react";

import "./aboutPage.css";

import intro_picture from "../pictures/about_page/intro_picture.png";
import home_screen from "../pictures/about_page/home_screen.png";
import login_screen from "../pictures/about_page/login_screen.png";
import easistent_screen from "../pictures/about_page/easistent_screen.png";

export default function AboutPage(props) {
  return (
    <div className="aboutPage-main">
      <div className="aboutPage-content">
        <div className="aboutPage-container">
          <p className="aboutPage-introText aboutPage-container-text">
            Aplikacija <b>ŠCVApp</b>:<br /> Aplikacija za dijake <br /> šolskega
            centra Velenje
          </p>
          <img src={intro_picture} alt=""></img>
        </div>
        <div className="aboutPage-container">
          <p className="aboutPage-container-text">
            Aplikacijo <b>ŠCVApp</b> sta ustvarila dijaka Blaž Osredkar in Urban
            Krepel v upanju, da bi združila vsa spletna orodja, potrebna za
            šolanje na eno, priročno mesto.
          </p>
          <img
            src={home_screen}
            alt=""
            className="aboutPage-container-image-phone"
          ></img>
        </div>
        <div className="aboutPage-container">
          <img
            src={easistent_screen}
            alt=""
            className="aboutPage-container-image-phone"
          ></img>
          <p className="aboutPage-container-text">
            Aplikacija vsebuje večino spletnih orodij, potrebnih za šolanje:
            <ul className="aboutPage-container-text-list">
              <li>eAsistent</li>
              <li>urniki</li>
              <li>domača stran šole</li>
              <li>portal malice </li>
              <li>dodatna orodja (Office, arnes učilnice,..)</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
