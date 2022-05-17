import React, { Component, useEffect, useState } from "react";
import "./ticket.css";
import "./ticket1.css";
import { TicketsHome } from "./TicketsHome";
import { ShowTickets } from "./ShowTickets";

export function MainTickets() {
  let tickets = [
    {
      type: "odprto",
      zap_st: "1",
      naslov: "App dela",
      zadeva: "Pač app mi je ful dobr",
      pošiljatelj: "en.random1@scv.si",
    },
    {
      type: "posredovano",
      zap_st: "2",
      naslov: "App ne naloži tipkovnice",
      zadeva: "App ne naloži tipkovnice",
      pošiljatelj: "en.random2@scv.si",
    },
    {
      type: "zaprto",
      zap_st: "3",
      naslov: "NUJNO!!!",
      zadeva: "Nekaj stvari ne dela:",
      pošiljatelj: "en.random3@scv.si",
    },
    {
      type: "odgovorjeno",
      zap_st: "4",
      naslov: "Ne dela login",
      zadeva: "V app se ne morem prijavit",
      pošiljatelj: "en.random4@scv.si",
    },
  ];
  return (
    <>
      <TicketsHome>
        <ShowTickets tickets={tickets} />
      </TicketsHome>
    </>
  );
}
