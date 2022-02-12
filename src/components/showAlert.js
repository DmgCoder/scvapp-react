import React from "react";

import {Alert, AlertTitle} from '@mui/material';

export default function ShowAlert(props){

    return(
        <Alert severity={props.severity} style={{position:"absolute", bottom:50,right:10,transform:!props.show?"translateX(100%)":"",transition:"transform 1s ease-in-out"}}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.text}
            </Alert>
    )
}