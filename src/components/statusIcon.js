import React from "react";

import away from "../pictures/status_icons/away.svg"
import brb from "../pictures/status_icons/brb.svg"
import busy from "../pictures/status_icons/busy.svg"
import unknown from "../pictures/status_icons/unknown.svg"
import available from "../pictures/status_icons/available.svg"
import dnd from "../pictures/status_icons/dnd.svg"
import offline from "../pictures/status_icons/offline.svg"

export default function StatusIcon(props){
    let statusImg
    switch (props.status.id) {
        case "Unknown":
            statusImg = unknown
            break;
        case "brb":
            statusImg = brb
            break;
        case "busy":
            statusImg = busy
            break;
        case "away":
            statusImg = away
            break;
        case "available":
            statusImg = available
            break;
        case "dnd":
            statusImg = dnd
            break;
        case "offline":
            statusImg = offline
            break;
        default:
            statusImg = unknown
            break;
    }
    if(statusImg){
        return(
            <img alt="" src={statusImg} title={props.status.display} className={props.className}></img>
        )
    }
    return(
        <div className={props.className} style={{backgroundColor:props.status.color}} title={props.status.display}></div>
    )
}