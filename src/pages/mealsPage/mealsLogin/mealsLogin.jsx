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
import axios from "axios";

const MealsLogin = () => {
  const theme = useSelector(selectTheme);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const { save } = useSession("user-meal");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (
      !username ||
      username?.trim() === "" ||
      !password ||
      password?.trim() === ""
    ) {
      dispatch(
        setAlert({
          type: "error",
          message: "Prosim vnesite uporabniško ime in geslo.",
          title: "Napaka!",
          show: true,
        })
      );
      return;
    }
    //Add username and password in form data
    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    try {
      const res = await axios.post(
        "https://malice.scv.si/api/v2/auth",
        formData
      );
      if (res.status === 200) {
        const data = res.data;
        const user = {
          access_token: data.access_token,
          first_name: data.student.first_name,
          last_name: data.student.last_name,
          pin_number: data.student.pin_number,
          budget: data.student.budget,
        };
        save(user);
        dispatch(
          setAlert({
            type: "success",
            message: "Prijava v sistem malic je bila uspešna.",
            title: "Prijava uspešna!",
            show: true,
          })
        );
        dispatch(setMealUser(user));
      }
    } catch (err) {
      dispatch(
        setAlert({
          type: "error",
          message: err?.response?.data?.errors ?? "Prišlo je do napake.",
          title: "Napaka!",
          show: true,
        })
      );
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
            type={"email"}
            value={username}
            onSubmit={(e) => e.preventDefault()}
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
            onSubmit={(e) => e.preventDefault()}
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
          href="https://malice.scv.si/students/password/new"
          className="meals-login-link"
          target={"_blank"}
          rel="noreferrer"
        >
          Pozabljeno geslo?
        </a>
        <a
          href="https://malice.scv.si/instructions"
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
