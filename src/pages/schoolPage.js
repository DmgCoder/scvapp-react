import React from "react";

export default function SchoolPage(props){//Prikaz šolske spletne strani
    return(
        <iframe src={props.url/* URL šolske spletne strani*/} style={{width:'100%',height:"100%",border:"none"}} title="Domača stran šole">

        </iframe>
    )
}