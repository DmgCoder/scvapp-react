import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ShowAlert from "../components/showAlert";

// FixMe: slovnična napaka v ms-login-btn.jsx
//  "Vpis z Microsoftovim računom" --> "Vpis z računom Microsoft"
import msLoginBtn from "../pictures/ms-login-btn.jsx";
import schoolLogo from "../pictures/school_logo.jsx";

import "./loginPage.css";

export default function LoginPage() {
  let defualtAlert = {
    show: false,
  };

  const [alertData, setAlertData] = useState(defualtAlert);

  let location = useLocation();
  let navigation = useNavigate();

  useEffect(() => {
    let search = location.search.slice(1).split("&");
    search.forEach((s) => {
      let a = s.split("=");
      let key = a[0] || "";
      let value = a[1] || "";

      if (key === "success" && value === "logout") {
        sessionStorage.setItem("logout", "success");
        sessionStorage.setItem("logout-time", new Date().getTime());
        navigation({
          search: "",
        });
      }
    });
  });

  useEffect(() => {
    let item = sessionStorage.getItem("logout") || "";
    let itemTime = sessionStorage.getItem("logout-time") || 0;
    if (item === "success" && !alertData.show) {
      setAlertData({
        show: true,
      });
      let int = setInterval(() => {
        let n = new Date().getTime();
        if (parseInt(itemTime) + 8000 <= n) {
          clearInterval(int);
          sessionStorage.removeItem("logout");
          sessionStorage.removeItem("logout-time");
          setAlertData(defualtAlert);
        }
      }, 1000);
    }
  });

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
            </div>
            <a className="linkToAbout" href="/o-nas">
              Kaj je ta spletna stran?
            </a>
          </main>
        </div>
      </div>
      <ShowAlert
        show={alertData.show}
        title={"Odjava uspešna!"}
        text={"Odjavljeni ste iz portala ŠCVApp."}
        severity={alertData.severity}
      />
    </>
  );
}
