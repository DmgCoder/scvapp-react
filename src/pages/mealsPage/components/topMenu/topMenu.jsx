import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./topMenu.css";

//Import assets
import ProfilePicture from "../../../../assets/slike_malica/profilePicture.png";
import { useState } from "react";
import { selectMealUser } from "../../../../features/mealUser/mealUserSlice";

const TopMenu = () => {
  const [alertInfo, setAlertInfo] = useState("");
  const mealUser = useSelector(selectMealUser);
  const theme = useSelector(selectTheme);
  return (
    <div className={`top-menu-meals ${theme}`}>
      <div className="user-info-meals">
        <div>
          <p>PIN koda za današnjo malico:</p>
          <p>{mealUser?.pin_number ?? ""}</p>
        </div>
        <div>
          <p>Stanje na vašem računu:</p>
          <p>{`${mealUser?.budget}€` ?? ""}</p>
        </div>
      </div>
      {alertInfo !== "" && (
        <div className="alert-meals">
          <Alert severity="error">{alertInfo}</Alert>
        </div>
      )}
      <div className="user-profile-meals">
        <img src={ProfilePicture} alt="Profile" />
        <p>
          {mealUser?.first_name ?? ""} {mealUser?.last_name ?? ""}
        </p>
      </div>
    </div>
  );
};

export default TopMenu;
