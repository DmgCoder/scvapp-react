import React, { useEffect, useState } from "react";

import lightLoginBtn from "../pictures/ms_login_btn/ms-symbollockup_signin_light.svg"

import './loginPage.css'


export default function LoginPage(){
    function isLoaded(e){
        console.log(e)
    }

    //{`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`}
    return(
        <div className="main">
            <div className="loginWindow">
                <div className="content">
                    <p>Pozdravljeni v ŠCV App, pred nadaljevanjem se prosim prijavite v aplikacijo</p>
                    <a className=".loginBtn">
                        <img src={lightLoginBtn} alt=""></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

