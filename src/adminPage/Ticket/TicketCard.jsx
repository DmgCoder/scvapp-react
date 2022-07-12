import React, { useState } from "react";
import arrowIcon from "../../pictures/admin_page/arrow-right.svg";

export function TicketCard({
  type,
  zap_st,
  naslov,
  zadeva,
  pošiljatelj,
  clickedOnStage,
}) {
  let typeToDisplay = {
    odprto: "Odprto",
    zaprto: "Zaprto",
    posredovano: "Posredovano",
    odgovorjeno: "Odgovorjeno",
  };

  const [hoveringType, setHoveringType] = useState(false);

  return (
    <tr className="ticket-card">
      <td className="ticket-card-item" id="zap_st">
        {zap_st}
      </td>
      <td className="ticket-card-item" id="naslov">
        {naslov}
      </td>
      <td className="ticket-card-item" id="zadeva">
        {zadeva}
      </td>
      <td className="ticket-card-item" id="sender">
        {pošiljatelj}
      </td>
      <td
        className={`ticket-card-item ${type}`}
        id="type"
        onClick={clickedOnStage}
        data-type={type}
        data-zap_st={zap_st}
        style={{ cursor: "pointer", textDecoration:hoveringType ? "underline" : "none" }}
        onMouseEnter={() => setHoveringType(true)}
        onMouseLeave={() => setHoveringType(false)}
      >
        {typeToDisplay[type] || "No type"}
      </td>
      <td>
        <img src={arrowIcon} alt=""></img>
      </td>
    </tr>
  );
}
