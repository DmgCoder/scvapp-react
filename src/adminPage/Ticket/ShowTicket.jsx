import React from "react";
import { useParams } from "react-router";

export function ShowTicket(){

    let { ticket_id } = useParams()

    return <div>ShowTicket</div>
}