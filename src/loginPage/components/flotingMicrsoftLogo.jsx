import React from "react";

import microsoftLogo from "../../pictures/microsoft_logo.svg";

import "./floatingMicrosoftLogo.css";

export default function FlotingMicrosoftLogo() {
  return (
    <div className="floting-microsoft-logo">
      <img src={microsoftLogo} alt="Microsoft Logo" />
    </div>
  );
}
