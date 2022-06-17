import React, { Component, useEffect, useState } from "react";
import "./ticket.css";
import "./ticket1.css";
import { TicketsHome } from "./TicketsHome";
import { ShowTickets } from "./ShowTickets";
import { CircularProgress } from "@mui/material";
import { PopUpChangingStage } from "./components/PopUpChangingStage";

export default function MainTickets() {
  const [tickets, setTickets] = useState([]);
  const [showPopUpForChangeStage, setShowPopUpForChangeStage] = useState(false);
  const [popUpData, setPopUpData] = useState({});
  async function getTickets() {
    setTickets([]);
    let json = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/ticket/all`,
      {
        mode: "cors",
        credentials: "include",
        method: "GET",
      }
    ).catch((e) => {
      console.log(e);
    });
    if (json.status !== 200) {
      return;
    }
    let data = await json.json();
    setTickets(data);
  }
  useEffect(() => {
    getTickets();
  }, []);

  function clickedOnStage(e) {
    let target = e.target;
    let zap_st = target.dataset.zap_st;
    let type = target.dataset.type;
    setPopUpData({ zap_st, type });
    setShowPopUpForChangeStage(true);
  }
  return (
    <>
      <TicketsHome refreshTickets={getTickets} isLoading={tickets.length === 0}>
        {tickets.length > 0 ? (
          <ShowTickets tickets={tickets} clickedOnStage={clickedOnStage} />
        ) : (
          <CircularProgress style={{ position: "absolute" }} />
        )}
      </TicketsHome>
      <PopUpChangingStage
        isOpen={showPopUpForChangeStage}
        setIsOpen={setShowPopUpForChangeStage}
        ticket_id={popUpData.zap_st}
        ticket_type={popUpData.type}
        refresh={getTickets}
      />
    </>
  );
}
