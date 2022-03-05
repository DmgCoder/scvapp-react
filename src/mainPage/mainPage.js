import React from "react";
import { useLocation } from "react-router-dom";
import EasistentPage from "../pages/eAsistentPage";
import MalicePage from "../pages/malicePage";
import SchoolPage from "../pages/schoolPage";
import SettingsPage from "../pages/settingsPage";
import ArnesUcilnicePage from "../pages/arnesUcilnicePage";

export default function MainPage(props){//Prikaz določene komponente glede na spletno pot
    let location = useLocation()//Dobimo URL

    let pathname = location.pathname//Dobimo pot po imenu domene in porta npr. .../domov

    //Preverimo ali se ime poti ujema z besedo in temu ustrezno prikazemo komponento
    switch(pathname){
        case "/domov":
            return (
                <div style={props.style}>
                    {
                    <SchoolPage url={props.userData.school&&props.userData.school.schoolUrl}/>
                    }
                </div>
            )

        case "/malice":
            return (
                <div style={props.style}>
                    <MalicePage url={props.maliceUrlLink}/>
                </div>
            )

        case "/easistent":
            return (
                <div style={props.style}>
                    <EasistentPage url={props.eAUrlLink}/>
                </div>
            )

        case "/nastavitve":
            return(
                <div style={props.style}>
                    <SettingsPage userData={props.userData}/>
                </div>
            )

        case "/arnes-ucilnice":
            return(
                <div style={props.style}>
                    <ArnesUcilnicePage />
                </div>
            )

        default:
            return (
                <div style={props.style}>
                    <SchoolPage url={props.userData.school&&props.userData.school.schoolUrl}/>
                </div>
            )
    }
}