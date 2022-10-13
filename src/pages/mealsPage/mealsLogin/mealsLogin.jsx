import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import { setAlert } from "../../../features/alert/alertSlice";
import { useSession } from "react-use-session";
import { FormControlLabel, Checkbox } from "@mui/material";

import "./mealsLogin.css";

import SchoolLogo from "../../../assets/school_logo.svg";
import StyledTextField from "../../../components/StyledTextField";
import { setMealUser } from "../../../features/mealUser/mealUserSlice";

const MealsLogin = () => {
  const theme = useSelector(selectTheme);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const { save } = useSession("user-meal");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (
      username ||
      username?.trim() === "" ||
      password ||
      password?.trim() === ""
    ) {
      dispatch(setAlert("Please enter your username and password", "error"));
    }
    //Add username and password in form data
    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    try {
      const res = await fetch("https://malice.scv.si/api/v2/auth", {
        method: "POST",
        body: formData,
      });
      if (res.status === 200) {
        const data = await res.json();
        const user = {
          access_token: data.access_token,
          first_name: data.student.first_name,
          last_name: data.student.last_name,
          pin_number: data.student.pin_number,
          budget: data.student.budget,
        };
        save(user);
        dispatch(setAlert("Login successful", "success"));
        dispatch(setMealUser(user));
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            fontcolor="currentColor"
            activecolor="#3f87f3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledTextField
            id="standard-basic"
            label="Geslo"
            type={"password"}
            variant="standard"
            className="meals-login-form-input"
            fontcolor="currentColor"
            activecolor="#3f87f3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.value)}
              />
            }
            label="Zapomni si me"
          />
        </div>
        <button className="meals-login-button" onClick={handleLogin}>
          Prijavi se
        </button>
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
