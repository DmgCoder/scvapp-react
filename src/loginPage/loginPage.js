import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ShowAlert from "../components/showAlert";

import msLoginBtn from "../pictures/ms-btn_signin_light.png"
import schoolLogo from "../pictures/school_logo.png"

import './loginPage.css'


export default function LoginPage(){

    let defualtAlert = {
        show:false,
        title:"",
        text:"",
    }

    const [ alertData, setAlertData ] = useState(defualtAlert)

    let location = useLocation()
    let navigation = useNavigate()

    useEffect(()=>{
        let search = location.search
        let parameters = search.slice(1).split("&")
        for(let i = 0;i<parameters.length;i++){
            let p = parameters[i].split("=")
            if(p[0]=="success" && p[1]=="logout"){
                setAlertData({
                    show:true,
                    title:"Uspešna odjava",
                    text:"Uspešno ste se odjavili iz ŠCVApp",
                    severity:"success"
                })
            }
        }
    })

    return(
        <>
        <div className="main">
            <div className="loginWindow" >
                <div className="content">
                    <img src={schoolLogo} className="schoolLogo"></img>
                    <p className="text">Prijava v sistem <b>ŠCVApp</b></p>
                    <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`} className="loginBtn">
                        <img src={msLoginBtn} alt="" className="btnImg"></img>
                    </a>
                </div>
                <a className="linkToAbout" href="/o-nas">Kaj je sploh ta spletna stran?</a>
            </div>
        </div>
        <ShowAlert show={alertData.show} title={alertData.title} text={alertData.text} severity={alertData.severity}/>
        </>
    );
}

