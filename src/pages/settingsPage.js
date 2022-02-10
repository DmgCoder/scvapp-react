import React, {useEffect,useState} from "react";
import HomePage from "../homePage/homePage";

import "./settingsPage.css"

export default function SettingsPage(props){
    const [styleStatus, setStyleStatus] = useState({})

    useEffect(()=>{
        if(props.userData.status){
            setStyleStatus({
                backgroundColor:props.userData.status.color,
            })
        }
    },[props.userData.status])

    async function changeStatus(e){
        let target = e.target
        let id = target.id || ""
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/setStatus/${id}`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
    }

    return(
        <div className="settings">
            <div className="profile-Settings">
                <div className="profilePictureAndIcon-Settings">
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`} className="profilePicture-Settings"></img>
                    <div className="setStatus">
                        {
                            props.userData.status && <div className="statusIcon-Settings" style={styleStatus} title={props.userData.status.display}></div>
                        }
                        <div className="dropdown-content" onClick={changeStatus}>
                            <a id="available">Dosegljiv/-a</a>
                            <a id="busy">Zaseden/-a</a>
                            <a id="dnd">Ne motite</a>
                            <a id="brb">Takoj bom nazal</a>
                            <a id="away">Odsoten</a>
                            <a id="offline">Nedosegljiv</a>
                        </div>
                    </div>
                </div>
                <div className="profileInfo">
                    <p>{props.userData.displayName}</p>
                    <span>{props.userData.mail}</span>
                </div>
            </div>
        </div>
    )
}