import React from "react";

export default function SchoolPage(props){
    return(
        <iframe src={props.url} style={{width:'100%',height:"100%",border:"none"}} title="Šolska spletna stran">

        </iframe>
    )
}