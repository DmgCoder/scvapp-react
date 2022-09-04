import React from "react";

import microsoftLogo from "../../pictures/microsoft_logo.svg";

import "./floatingMicrosoftLogo.css";

export default function FlotingMicrosoftLogo() {
  return (
    <div
      className="floting-microsoft-logo"
      title="Ta spletna stran podpira prijavo z Microsoft računom"
    >
      <img src={microsoftLogo} alt="Microsoft Logo" />
    </div>
  );
}
