import React from "react";
import arrowIcon from "../../pictures/admin_page/arrow-right.svg";

export function TicketCard({ type, zap_st, naslov, zadeva, pošiljatelj }) {
  let typeToDisplay = {
    odprto: "Odprto",
    zaprto: "Zaprto",
    posredovano: "Posredovano",
    odgovorjeno: "Odgovorjeno",
  };
  return (
    <tr>
      <td>{zap_st}</td>
      <td>{naslov}</td>
      <td>{zadeva}</td>
      <td>{pošiljatelj}</td>
      <td className={`${type}`}>{typeToDisplay[type] || "No type"}</td>
      <td>
        <img src={arrowIcon} alt=""></img>
      </td>
    </tr>
  );
}
