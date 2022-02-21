import React, { useEffect, useState } from "react";

import {Alert, AlertTitle} from '@mui/material';

export default function ShowAlert(props){

    const [ alertStyle, setAlertStyle ] = useState({
        display:"none",
        transform:"translateX(200%)",
    })

    const [timeOutForClose, setTimeOutForClose ] = useState()

    useEffect(()=>{
        if(props.show){
            setAlertStyle({
                display:"",
                transform:"translateX(200%)",
            })
            // setTimeout(()=>{
            // },1250)
            clearTimeout(timeOutForClose)
            setTimeout(()=>{
                    setAlertStyle({
                        display:"",
                        transform:"",
                    })
            },50)
        }else{
            setAlertStyle({
                display:"",
                transform:"translateX(200%)",
            })
            setTimeOutForClose(setTimeout(()=>{
                    setAlertStyle({
                        display:"none",
                        transform:"translateX(200%)",
                    })
            },1200))
        }
    },[props.show])

    return(
        <Alert severity={props.severity} style={{position:"absolute", bottom:50,right:10,transform:alertStyle.transform,display:alertStyle.display,transition:"transform 1.2s ease-in-out"}}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.text}
        </Alert>
    )
}