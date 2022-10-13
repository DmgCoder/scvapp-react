import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";

import "./mealsLogin.css";

import SchoolLogo from "../../../assets/school_logo.svg";
import StyledTextField from "../../../components/StyledTextField";
import { FormControlLabel, Checkbox } from "@mui/material";

const MealsLogin = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`meals-login ${theme}`}>
      <div className="meals-login-container">
        <img alt="school logo" className="meals-login-logo" src={SchoolLogo} />
        <div className="meals-login-form">
          <p className="meals-login-title">Prijava v sistem malic</p>
          <StyledTextField
            id="standard-basic"
            label="E-pošta"
            variant="standard"
            className="meals-login-form-input"
            fontColor="currentColor"
            activeColor="#3f87f3"
          />
          <StyledTextField
            id="standard-basic"
            label="Geslo"
            type={"password"}
            variant="standard"
            className="meals-login-form-input"
            fontColor="currentColor"
            activeColor="#3f87f3"
          />
          <FormControlLabel control={<Checkbox />} label="Zapomni si me" />
        </div>
        <button className="meals-login-button">Prijavi se</button>
        <a
          href="https://malice.scv.si"
          className="meals-login-link"
          target={"_blank"}
          rel="noreferrer"
        >
          Pozabljeno geslo?
        </a>
        <a
          href="https://malice.scv.si"
          className="meals-login-link"
          target={"_blank"}
          rel="noreferrer"
        >
          Navodila za uporabo
        </a>
      </div>
    </div>
  );
};

export default MealsLogin;
