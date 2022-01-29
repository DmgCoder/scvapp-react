import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

import msLoginBtn from "../pictures/ms-btn_signin_light.png"
import schoolLogo from "../pictures/school_logo.png"

import './loginPage.css'


export default function LoginPage(){
    //{`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`}

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [widWidth, winHeight] = useWindowSize()

    const [ height, setHeight ] = useState(0)

    let ref = useRef(null);

    useEffect(()=>{
        setHeight(ref.current.clientWidth)
    },[widWidth])

  
    return(
        <div className="main">
            <div className="loginWindow" ref={ref} style={{height:height}}>
                <div className="content">
                    <img src={schoolLogo} className="schoolLogo"></img>
                    <p className="text">Prijava v sistem <b>ŠCVApp</b></p>
                    <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/authUrl/`} className="loginBtn">
                        <img src={msLoginBtn} alt="" className="btnImg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

