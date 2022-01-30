import React, { useEffect } from "react";

import "./sidebar.css"

import SidebarLink from "./sidebarLink";
import schoolLogo from "../pictures/school_logo.png"

export default function SideBar(props){
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <div className="upHalf">
                        <img src={schoolLogo}></img>
                        <ul className="links">
                            <SidebarLink name="Domača stran" icon="🏠" className="active"/>
                            <SidebarLink name="Malice" icon="🍽" />
                            <SidebarLink name="eAsistent" icon="⌘" />
                            <SidebarLink name="Poišči osebo" icon="🗓" />
                            <SidebarLink name="Nastavitve" icon="⚙️" />
                        </ul>
                    </div>
                    <div className="downHalf">
                        <div className="userProfile">
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`} className="profilePicture"></img>
                            <div className="profileInfo">
                                <p>{props.userData.displayName}</p>
                                <span>{props.userData.mail}</span>
                            </div>
                            <a href={`${process.env.REACT_APP_BACKEND_URL}/user/logout`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D73323" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
}