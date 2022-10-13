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
          <p>Prijava v sistem malic</p>
          <StyledTextField
            id="standard-basic"
            label="E-pošta"
            variant="standard"
            className={theme}
            fontColor="currentColor"
          />
          <StyledTextField
            id="standard-basic"
            label="Geslo"
            type={"password"}
            variant="standard"
            fontColor="currentColor"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Zapomni si me"
          />
        </div>
      </div>
    </div>
  );
};

export default MealsLogin;
