import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css"

import SidebarLink from "./sidebarLink";
import schoolLogo from "../pictures/school_logo.png"

export default function SideBar(props){
        let pathname = useLocation().pathname
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <div className="upHalf">
                        <img src={schoolLogo}></img>
                        <ul className="links">
                            <SidebarLink name="Domača stran" href="/" pathname={pathname} >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                            </SidebarLink>
                            <SidebarLink name="Malice" href="/malice" pathname={pathname} >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z"/></svg>
                            </SidebarLink>
                            <SidebarLink name="eAsistent" href="/easistent" pathname={pathname}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="vector" fill="#000000" stroke="#000000" height="24px">
                                <g id="group">
                                    <path
                                        id="path"
                                        d="M 62.5 25 L 63 26.5 L 61.5 29 L 61 27.5 L 62.5 25 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_1"
                                        d="M 69.5 25 L 75 37.5 L 74 37.5 L 69.5 25 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_2"
                                        d="M 60.5 30 L 61 31.5 L 58.5 37 L 58 35.5 L 60.5 30 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_3"
                                        d="M 65 31 Q 67.7 29.9 67 32.5 L 65 33.5 L 65 31 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_4"
                                        d="M 64.5 35 L 65 37.5 L 63.5 40 L 63 38.5 L 64.5 35 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_5"
                                        d="M 23.5 37 L 26 37.5 Q 19.3 38.8 16.5 44 L 18 41.5 Q 17.3 39.3 19.5 40 L 23.5 37 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_6"
                                        d="M 32.5 37 L 35 37.5 L 32.5 38 L 32.5 37 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_7"
                                        d="M 36.5 38 L 42 42.5 L 43 45.5 L 42 45.5 L 38.5 40 L 36.5 38 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_8"
                                        d="M 57.5 38 L 58 39.5 L 55.5 45 L 55 43.5 L 57.5 38 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_9"
                                        d="M 75.5 39 L 77 42.5 L 76 42.5 L 75.5 39 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_10"
                                        d="M 69.5 40 L 72 46.5 L 71 46.5 L 69.5 40 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_11"
                                        d="M 27.5 41 L 31 41.5 L 23 44 L 21.5 47 L 22 45.5 L 23.5 43 L 27.5 41 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_12"
                                        d="M 32.5 42 L 37 45.5 L 33.5 43 L 32.5 42 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_13"
                                        d="M 61.5 44 L 62 45.5 L 59.5 52 L 59 49.5 L 61.5 44 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_14"
                                        d="M 77.5 44 L 79 47.5 L 78 47.5 L 77.5 44 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_15"
                                        d="M 15.5 45 L 16 46.5 L 15 47.5 L 14.5 60 L 14 47.5 L 15.5 45 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_16"
                                        d="M 54.5 46 L 55 47.5 L 52.5 53 L 52 51.5 L 54.5 46 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_17"
                                        d="M 37.5 47 L 38 51 L 20.5 51 L 20 48.5 L 21 48.5 L 21.5 50 L 37 50 L 37.5 47 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_18"
                                        d="M 43.5 47 L 44 50.5 L 43 50.5 L 43.5 47 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_19"
                                        d="M 79.5 49 L 81 52.5 L 80 52.5 L 79.5 49 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_20"
                                        d="M 51.5 54 L 52 55.5 L 50.5 58 L 50 56.5 L 51.5 54 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_21"
                                        d="M 81.5 54 L 83 57.5 L 82 57.5 L 81.5 54 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_22"
                                        d="M 20.5 56 L 21 58.5 L 20 58.5 L 20.5 56 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_23"
                                        d="M 56.5 58 L 57 59.5 L 54.5 65 L 54 63.5 L 56.5 58 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_24"
                                        d="M 37.5 59 L 38 60.5 L 36 64 L 28.5 66 L 28.5 65 Q 34.9 64.9 37 60.5 L 37.5 59 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_25"
                                        d="M 40.5 59 Q 45.3 57.3 44 61.5 L 39.5 68 L 33.5 70 L 33.5 69 Q 39.9 68.4 42 63.5 L 43 60 Q 39.7 60.8 40.5 59 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_26"
                                        d="M 49.5 59 L 50 60.5 L 47.5 66 L 47 64.5 L 49.5 59 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_27"
                                        d="M 76.5 59 L 78 62.5 L 77 62.5 L 76.5 59 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_28"
                                        d="M 83.5 59 L 85 62.5 L 84 62.5 L 83.5 59 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_29"
                                        d="M 21.5 60 L 27 64.5 L 25.5 65 L 22 62.5 L 21.5 60 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_30"
                                        d="M 15.5 61 L 19.5 67 L 26 69.5 L 23.5 70 L 17 65.5 L 15.5 61 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_31"
                                        d="M 78.5 64 L 80 67.5 L 79 67.5 L 78.5 64 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_32"
                                        d="M 85.5 64 L 87 67.5 L 86 67.5 L 85.5 64 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_33"
                                        d="M 53.5 66 L 54 67.5 L 52.5 70 L 52 68.5 L 53.5 66 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_34"
                                        d="M 46.5 67 L 47 68.5 L 45 69.5 L 46.5 67 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.4588235"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.4588235"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_35"
                                        d="M 65 29 Q 68 28 67 31 Q 64 32 65 29 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_36"
                                        d="M 26.5 37 L 32 37.5 L 26.5 38 L 26.5 37 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_37"
                                        d="M 38.5 40 L 40.5 43 L 38.5 40 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_38"
                                        d="M 34.5 42 L 36.5 45 L 34.5 42 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_39"
                                        d="M 17.5 43 L 16.5 45 L 17.5 43 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_40"
                                        d="M 43.5 51 L 44 54.5 L 43 54.5 L 43.5 51 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_41"
                                        d="M 56 56 L 75.5 56 L 77 57.5 L 76.5 59 L 76 57 L 57.5 57 L 56.5 58 L 56 56 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_42"
                                        d="M 37.5 61 L 36.5 63 L 37.5 61 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_43"
                                        d="M 18.5 65 L 19.5 67 L 18.5 65 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_44"
                                        d="M 26.5 69 L 33 69.5 L 26.5 70 L 26.5 69 Z"
                                        // fill="#ffffff"
                                        fillOpacity="0.9960784"
                                        // stroke="#ffffff"
                                        strokeOpacity="0.9960784"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_45"
                                        d="M 63 25 L 68.5 25 L 69 26.5 L 87 69.5 L 81 70 L 75.5 56 L 56.5 56 L 56 58.5 L 52 70 L 47 70 L 47 67.5 L 62 30.5 L 63 25 Z M 65 29 L 65 34 L 58 52 L 74 52 L 67 33 Q 68 28 65 29 Z"
                                        // fill="#ffffff"
                                        // stroke="#ffffff"
                                        strokeWidth="1"/>
                                    <path
                                        id="path_46"
                                        d="M 24.5 38 Q 37.8 35.7 41 43.5 Q 44.3 47.4 43 55 L 19 55.5 Q 19.9 62.1 24.5 65 L 32.5 66 L 38 61.5 Q 37.1 58.1 42.5 60 L 42 61.5 L 38.5 67 Q 34.2 70.7 24.5 69 L 17 63.5 Q 13.6 58.4 15 48.5 L 20.5 40 L 24.5 38 Z M 27 41 L 25 42 L 20 48 L 21 51 L 39 51 L 37 45 Q 35 40 27 41 Z"
                                        // fill="#ffffff"
                                        // stroke="#ffffff"
                                        strokeWidth="1"/>
                                </g>
                            </svg>

                            </SidebarLink>
                            <SidebarLink name="Poišči osebo" pathname={pathname}>
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S6,5.79,6,8C6,10.21,7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S8,9.1,8,8C8,6.9,8.9,6,10,6z"/><path d="M4,18c0.22-0.72,3.31-2,6-2c0-0.7,0.13-1.37,0.35-1.99C7.62,13.91,2,15.27,2,18v2h9.54c-0.52-0.58-0.93-1.25-1.19-2H4z"/><path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 c0.93,0.93,1.62,1.62,2.57,2.57L22,20.59C20.5,19.09,21.21,19.79,19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C18,17.1,17.1,18,16,18z"/></g></g></svg>
                            </SidebarLink>
                            <SidebarLink name="Nastavitve" pathname={pathname} >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                            </SidebarLink>
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