import React from "react";
import { Alert } from "@mui/material";

import "./topMenu.css";

//Import assets
import ProfilePicture from "../../../../assets/slike_malica/profilePicture.png";
import { useState } from "react";

const TopMenu = () => {
  const [alertInfo, setAlertInfo] = useState("Nizko stanje na računu");
  return (
    <div className="top-menu-meals">
      <div className="user-info-meals">
        <div>
          <p>PIN koda za današnjo malico:</p>
          <p>1234</p>
        </div>
        <div>
          <p>Stanje na vašem računu:</p>
          <p>4,99€</p>
        </div>
      </div>
      {alertInfo !== "" && (
        <div className="alert-meals">
          <Alert severity="error">{alertInfo}</Alert>
        </div>
      )}
      <div className="user-profile-meals">
        <img src={ProfilePicture} alt="Profile" />
        <p>Janez Novak</p>
      </div>
    </div>
  );
};

export default TopMenu;
