import React from "react";
import { useLocation } from "react-router-dom";
import EasistentPage from "../pages/eAsistentPage";
import MalicePage from "../pages/malicePage";
import SchoolPage from "../pages/schoolPage";
import SettingsPage from "../pages/settingsPage";

export default function MainPage(props){
    let location = useLocation()
    if(location.pathname === "/domov"){
        return (
            <div style={props.style}>
                {
                <SchoolPage url={props.userData.school&&props.userData.school.schoolUrl}/>
                }
            </div>
        )
    }else if(location.pathname === "/malice"){
        return (
            <div style={props.style}>
                <MalicePage />
            </div>
        )
    }else if(location.pathname === "/easistent"){
        return (
            <div style={props.style}>
                <EasistentPage />
            </div>
        )
    }else if(location.pathname === "/nastavitve"){
        return(
            <div style={props.style}>
                <SettingsPage userData={props.userData}/>
            </div>
        )
    }
    return (
        <div style={props.style}>
            <SchoolPage url={props.userData.school&&props.userData.school.schoolUrl}/>
        </div>
    )
}