import React, { Component, useEffect, useState } from "react";
import { TicketCard } from "./TicketCard";
import { useLocation } from "react-router-dom";
export function ShowTickets({ tickets, clickedOnStage }) {
  const location = useLocation();
  const [typeOfShowenTicket, setTypeOfShowenTicket] = useState("all");
  useEffect(() => {
    let pathname = location.pathname; //Dobimo pot po imenu domene in porta npr. .../domov
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, pathname.length - 1);
    }
    pathname = pathname.replace("/admin/ticket", "");
    let type = "all";
    switch (pathname) {
      case "/open":
        type = "odprto";
        break;
      case "/closed":
        type = "zaprto";
        break;
      default:
        type = "all";
        break;
    }
    setTypeOfShowenTicket(type);
  }, [location]);
  let filterdTickets = tickets;
  if (typeOfShowenTicket != "all") {
    filterdTickets = tickets.filter((e) => e.type == typeOfShowenTicket);
  }
  return filterdTickets.map((ticket, i) => {
    return (
      <TicketCard
        type={ticket.type}
        naslov={ticket.naslov}
        zadeva={ticket.zadeva}
        zap_st={ticket.id}
        pošiljatelj={ticket.sender}
        key={i}
        clickedOnStage={clickedOnStage}
      />
    );
  });
}
