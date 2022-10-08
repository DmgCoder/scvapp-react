import React from "react";

// FixMe: slovnična napaka v ms-login-btn.svg
//  "Vpis z Microsoftovim računom" --> "Vpis z računom Microsoft"
import msLoginBtn from "../../assets/ms-login-btn.png";
import schoolLogo from "../../assets/school_logo.svg";
import FlotingMicrosoftLogo from "./components/flotingMicrsoftLogo";

import "./loginPage.css";

export default function LoginPage() {
  return (
    <>
      <div className="main">
        <div className="loginWindow">
          <main className="main">
            <div className="content">
              <img alt="" src={schoolLogo} className="schoolLogo"></img>
              <p className="text">
                Prijava v portal <strong>ŠCVApp</strong>
              </p>
              <a
                href={`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`}
                className="loginBtn"
              >
                <img src={msLoginBtn} alt="" className="btnImg"></img>
              </a>
              <a className="linkToAbout" href="/o-nas">
                O spletni strani
              </a>
            </div>
            <FlotingMicrosoftLogo />
          </main>
        </div>
      </div>
    </>
  );
}
