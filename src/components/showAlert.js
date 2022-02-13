import React from "react";

import {Alert, AlertTitle} from '@mui/material';

export default function ShowAlert(props){

    return(
        <Alert severity={props.severity} style={{position:"absolute", bottom:50,right:10,transform:!props.show?"translateX(200%)":"",transition:"transform 1.2s ease-in-out"}}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.text}
        </Alert>
    )
}