import React, { useRef, useState } from "react";

import "./maliceLoginPage.css";

import SCVLogo from "../pictures/school_logo.png";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";

export default function MaliceLoginPage() {
  const [usernameStyle, setUsernameStyle] = useState({
    transition: "top 0.2s ease-in-out",
  });
  const [passwordStyle, setPasswordStyle] = useState({
    transition: "top 0.2s ease-in-out",
  });

  const [showPassoword, setShowPassword] = useState(false);

  let navigation = useNavigate();
  let loginForm = useRef();

  async function loginUser(e) {
    e.preventDefault();
    let formData = new FormData(loginForm.current);
    const username = formData.get("email") || "";
    const password = formData.get("password") || "";
    if (username !== "" && password !== "") {
      let res = await fetch("https://malice.scv.si/api/v2/auth", {
        method: "POST",
        mode: "cors",
        body: formData,
      }).catch((e) => console.log(e));
      if (res.status === 200) {
        console.log(await res.json());
      } else {
        console.log(res);
      }
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
    const username = formData.get("email").trim() || "";
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

  function unshowShowPassoword() {
    setShowPassword(!showPassoword);
  }

  return (
    <>
      <div className="maliceLogin">
        <div className="maliceLogin-Wrap">
          {/* <div className="maliceLogin-LoginWindow-Alert">
            <p>Pred nadaljevanjem se morate prijaviti!</p>
          </div> */}
          <div className="maliceLogin-LoginWindow">
            <img src={SCVLogo} alt=""></img>
            <p className="maliceLogin-LoginWindow-Text">
              Prijava v sistem malic
            </p>
            <form
              className="maliceLogin-LoginWindow-Form"
              onSubmit={loginUser}
              ref={loginForm}
            >
              <div className="maliceLogin-LoginWindow-Form-Input">
                <span style={usernameStyle}>E-pošta</span>
                <input
                  type="email"
                  name="email"
                  onFocus={usernameChangeFocus}
                  onBlur={usernameChangeUnFocus}
                ></input>
              </div>
              <div className="maliceLogin-LoginWindow-Form-Input">
                <span style={passwordStyle}>Geslo</span>
                <input
                  type={!showPassoword ? "password" : "text"}
                  name="password"
                  onFocus={passwordChangeFocus}
                  onBlur={passwordChangeUnFocus}
                ></input>
                <button
                  className="maliceLogin-LoginWindow-Form-Input-eye"
                  onClick={unshowShowPassoword}
                >
                  {!showPassoword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  )}
                </button>
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
      </div>
    </>
  );
}
