import React, { useRef, useState } from "react";

import "./maliceLoginPage.css";

import SCVLogo from "../pictures/school_logo.png";
import { useNavigate } from "react-router";

export default function MaliceLoginPage() {
  const [usernameStyle, setUsernameStyle] = useState({
    transition: "top 0.2s ease-in-out",
  });
  const [passwordStyle, setPasswordStyle] = useState({
    transition: "top 0.2s ease-in-out",
  });

  let navigation = useNavigate();
  let loginForm = useRef();

  function loginUser(e) {
    e.preventDefault();
    let formData = new FormData(loginForm.current);
    const username = formData.get("username") || "";
    const password = formData.get("password") || "";
    if (username !== "" && password !== "") {
      navigation({
        pathname: "/malice",
      });
    }
  }

  function usernameChangeFocus() {
    setUsernameStyle({
      top: "-100%",
      fontSize: "13px",
      transition: "top 0.2s ease-in-out",
    });
  }
  function usernameChangeUnFocus() {
    let formData = new FormData(loginForm.current);
    const username = formData.get("username").trim() || "";
    if (username == "") {
      setUsernameStyle({
        transition: "top 0.2s ease-in-out",
      });
    }
  }

  function passwordChangeFocus() {
    setPasswordStyle({
      top: "-100%",
      fontSize: "13px",
      transition: "top 0.2s ease-in-out",
    });
  }
  function passwordChangeUnFocus() {
    let formData = new FormData(loginForm.current);
    const password = formData.get("password").trim() || "";
    if (password == "") {
      setPasswordStyle({
        transition: "top 0.2s ease-in-out",
      });
    }
  }

  return (
    <>
      <div className="maliceLogin">
        <div className="maliceLogin-LoginWindow">
          <img src={SCVLogo} alt=""></img>
          <p className="maliceLogin-LoginWindow-Text">Prijava v sistem malic</p>
          <form
            className="maliceLogin-LoginWindow-Form"
            onSubmit={loginUser}
            ref={loginForm}
          >
            <div className="maliceLogin-LoginWindow-Form-Input">
              <span style={usernameStyle}>E-pošta</span>
              <input
                type="email"
                name="username"
                onFocus={usernameChangeFocus}
                onBlur={usernameChangeUnFocus}
              ></input>
            </div>
            <div className="maliceLogin-LoginWindow-Form-Input">
              <span style={passwordStyle}>Geslo</span>
              <input
                type="password"
                name="password"
                onFocus={passwordChangeFocus}
                onBlur={passwordChangeUnFocus}
              ></input>
            </div>
            <div className="maliceLogin-LoginWindow-Form-RememberMe">
              <input type="checkbox" name="rememberMe"></input>
              <p>Zapomni si me</p>
            </div>
            <button
              type="submit"
              className="maliceLogin-LoginWindow-Form-SubmitBtn"
            >
              Prijava
            </button>
          </form>
          <a
            className="maliceLogin-LoginWindow-Link"
            href="https://malice.scv.si/students/password/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pozabljeno geslo?
          </a>
          <a
            className="maliceLogin-LoginWindow-Link"
            href="https://malice.scv.si/instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navodila za uporabo
          </a>
        </div>
      </div>
    </>
  );
}
