import React, {useEffect,useState} from "react";
import HomePage from "../homePage/homePage";

import "./settingsPage.css"

import ers from "../pictures/school/ers.svg"

export default function SettingsPage(props){
    const [styleStatus, setStyleStatus] = useState({})
    const [styleDropdown, setStyleDropdown] = useState({
        display:"none"
    })
    const [styleDropdownSelector, setStyleDropdownselector] = useState({
        borderRadius:"10px"
    })

    const statuses = [
        {
            id:"available",
            color:"#90C35C",
            display:"Dosegljiv/-a"
        },
        {
            id:"busy",
            color:"#D64E58",
            display:"Zaseden/-a"
        },
        {
            id:"dnd",
            color:"#D64E58",
            display:"Ne motite"
        },
        {
            id:"brb",
            color:"#FBBC39",
            display:"Takoj bom nazaj"
        },
        {
            id:"away",
            color:"#FBBC39",
            display:"Odsoten"
        },
        {
            id:"offline",
            color:"#747474",
            display:"Nedosegljiv/-a"
        },
    ]

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
        console.log(id)
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/setStatus/${id}`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
        dropdown()
        props.userData.refreshUserStatus()
    }

    function dropdown(){
        if(styleDropdown.display == "none"){
            setStyleDropdown({
                display:"flex"
            })
            setStyleDropdownselector({
                borderBottomRightRadius:"10px",
                borderTopLeftRadius:"10px",
                borderTopRightRadius:"10px"
            })
        }else{
            setStyleDropdown({
                display:"none"
            })
            setStyleDropdownselector({
                borderRadius:"10px"
            })
        }
    }

    function selectedStauses(){
        let elements = []
        if(!props.userData.status) return
        for(let i = 0;i<statuses.length;i++){
            let s = statuses[i]
            elements.push(
                <div className="selectStatus" onClick={changeStatus} id={s.id} key={s.id}>
                    <div style={{backgroundColor:s.color}} id={s.id}></div>
                    <p id={s.id}>{s.display}</p>
                </div>
            )
        }
        return elements
    }

    return(
        <div className="settings">
            <div className="userInfo-Settings">
                <div className="profile-Settings">
                    <div className="profilePictureAndIcon-Settings">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`} className="profilePicture-Settings"></img>
                        {
                            props.userData.status && <div className="statusIcon-Settings" style={styleStatus} title={props.userData.status.display}></div>
                        }
                    </div>
                    <div className="profileInfo-Settings">
                        <p>{props.userData.displayName}</p>
                    </div>
                </div>
                <div className="schoolLogo-Settings">
                        <img src={ers}></img>
                </div>
            </div>
            <div className="mainSettings">
                <div className="floatingDiv">
                    <div className="floatingContent">
                        <p>Vaš status:</p>
                        <div className="statusDropdown" style={styleDropdownSelector}>
                            <div className="statusIconAndText">
                                {
                                    props.userData.status && <div style={styleStatus}></div>
                                }
                                <p>{props.userData.status && props.userData.status.display}</p>
                            </div>
                            <div className="arrowDown" onClick={dropdown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            <div className="dropdownContent" style={styleDropdown}>
                                {
                                    selectedStauses()
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="floatingDiv">
                        <div className="floatingContent">
                            <p>Vaš e-naslov:</p>
                            <p>{props.userData.mail}</p>
                        </div>
                    </div>
                    <div className="floatingDiv">
                        <div className="floatingContent">
                            <p>Telefonska številka:</p>
                            <p>{props.userData.mobilePhone || "/"}</p>
                        </div>
                    </div>
                    <div className="floatingDiv">
                        <div className="floatingContent">
                            <p>Dodatne informacije o vas:</p>
                            <a href={`https://eur.delve.office.com/?u=${props.userData.id}&v=editprofile`} target="_blank">Kliknite tukaj za odpiranje portala Office</a>
                        </div>
                    </div>
                    <div className="floatingDiv">
                        <div className="floatingContent">
                            <p>O aplikaciji ŠCVApp:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
            </div>
        </div>
    )
}