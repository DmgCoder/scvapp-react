import React, { useEffect, useState } from "react";

import darkLoginBtn from "../pictures/ms_login_btn/ms-symbollockup_signin_dark.svg"
import lightLoginBtn from "../pictures/ms_login_btn/ms-symbollockup_signin_light.svg"
import { WindowOpener } from "../classes/windowsOpener.js"

import './loginPage.css'


export default function LoginPage(){

    let loginBtnImg = lightLoginBtn

    const bridge = ()=>{

    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        loginBtnImg = darkLoginBtn
    }
    return(
        <div className="main">
            <div className="loginWindow">
                <div className="content">
                    <p>Pozdravljeni v ŠCV App, pred nadaljevanjem se prosim prijavite v aplikacijo</p>
                    <WindowOpener url={`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`} bridge={bridge} name={"Prijavno okno"} opts={"popup width=700,height=700"}>
                        <img src={loginBtnImg} alt=""></img>
                    </WindowOpener>
                </div>
            </div>
        </div>
    );
}

