import React from "react";
import { Link } from "react-router-dom";
import userSettingsIcon from "../pictures/admin_page/user_setting_icon.svg";
import graphIcon from "../pictures/admin_page/Graph_Flat_Icon.svg";
import calenderIcon from "../pictures/admin_page/Schedule_or_Calendar_Flat_Icon.svg";
import schoolIcon from "../pictures/admin_page/school.png";
import ticketIcon from "../pictures/admin_page/Ticket.png";
import exitIcon from "../pictures/admin_page/Izhod.png";

import "./home.css";

export default function AdminHome() {
  return (
    <>
      <div className="admin-home">
        <main className="admin-home-content">
          <div className="admin-home-title">
            <img alt="" src={userSettingsIcon} />
            <p>NADZORNA PLOŠČA</p>
          </div>
          <p className="admin-home-subtitle">Izberi orodje:</p>
          <div className="admin-home-select">
            <ItemToSelect
              text={"Urejanje urnikov"}
              href={"/admin/ureditevUrnikov"}
            >
              <img src={calenderIcon} alt="" />
            </ItemToSelect>
            <ItemToSelect text={"Ogled grafov"} href={""}>
              <img src={graphIcon} alt="" />
            </ItemToSelect>
            <ItemToSelect text={"Spremeni šolo"} href={""}>
              <img src={schoolIcon} alt="" />
            </ItemToSelect>
            <ItemToSelect text={"Ticket sistem"} href={"/admin/ticket/home"}>
              <img src={ticketIcon} alt="" />
            </ItemToSelect>
            <ItemToSelect text={"Izhod"} href={"/"}>
              <img src={exitIcon} alt="" />
            </ItemToSelect>
          </div>
        </main>
      </div>
    </>
  );
}

function ItemToSelect({ text, children, href }) {
  return (
    <Link className="admin-home-select-item" to={href}>
      <div className="admin-home-select-item-box">{children}</div>
      <p className="admin-home-select-item-text">{text}</p>
    </Link>
  );
}
