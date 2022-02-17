import React, {useState} from "react";

import "./settingsPage.css"

import ers from "../pictures/school/ers.svg"
import gim from "../pictures/school/gim.svg"
import ssd from "../pictures/school/ssd.svg"
import ssgo from "../pictures/school/ssgo.svg"
import vss from "../pictures/school/vss.svg"
import mic from "../pictures/school/mic.svg"
import schoolLogo from "../pictures/school_logo.svg"
import StatusIcon from "../components/statusIcon";

export default function SettingsPage(props){
    const [styleDropdown, setStyleDropdown] = useState({
        opacity:"0",
        visibility:"hidden"
    })
    const [styleDropdownSelector, setStyleDropdownselector] = useState({
        borderRadius:"var(--border-radius-for-elements)"
    })
    const [styleAppInfoSelector, setStyleAppInfoSelector] = useState({
        borderRadius:"var(--border-radius-for-elements)",
        position:"relative",
        boxShadow:"0 4px 6px -6px #222"
    })
    const [styleAppInfo, setStyleAppInfo] = useState({
        opacity:"0",
        visibility:"hidden"
    })

    let easterEggText = ""
    if(props.userData.school){
        easterEggText = props.userData.school.razred.includes("TR") ? "Računalniška zakon 🤪" : "Imagine, da nisi na računalniški 😃"
    }

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
        if(styleDropdown.opacity === "0"){
            setStyleDropdown({
                opacity:"1",
                visibility:"visible"
            })
            setStyleDropdownselector({
                borderTopLeftRadius:"var(--border-radius-for-elements)",
                borderTopRightRadius:"var(--border-radius-for-elements)"
            })
        }else{
            setStyleDropdown({
                opacity:"0",
                visibility:"hidden"
            })
            setStyleDropdownselector({
                borderRadius:"var(--border-radius-for-elements)",
            })
        }
    }

    function dropdownAppInfo(){
        if(styleAppInfo.opacity === "0"){
            setStyleAppInfo({
                opacity:"1",
                visibility:"visible"
            })
            setStyleAppInfoSelector({
                borderTopLeftRadius:"var(--border-radius-for-elements)",
                borderTopRightRadius:"var(--border-radius-for-elements)",
                borderBottomRightRadius:"0px",
                borderBottomLeftRadius:"0px",
                position:"relative",
                boxShadow:"none"
            })
        }else{
            setStyleAppInfo({
                opacity:"0",
                visibility:"hidden"
            })
            setStyleAppInfoSelector({
                borderRadius:"var(--border-radius-for-elements)",
                position:"relative",
                boxShadow:"0 4px 6px -6px #222"
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
                    <StatusIcon status={s} className="selectStatus-Icon"/>
                    <p id={s.id}>{s.display}</p>
                </div>
            )
        }
        return elements
    }

    let schoolImg = ers
    if(props.userData.school){
        switch(props.userData.school.id){
            case "ERS":
                schoolImg = ers
                break;
            case "GIM":
                schoolImg = gim
                break;
            case "SSD":
                schoolImg = ssd;
                break;
            case "SSGO":
                schoolImg = ssgo
                break;
            case "VSS":
                schoolImg = vss
                break;
            case "MIC":
                schoolImg = mic
                break;
            default:
                schoolImg = schoolLogo
                break;
        }
    }

    return(
        <div className="settings">
            <main className="main">
                <div className="userInfo-Settings">
                    <div className="profile-Settings">
                        <div className="profilePictureAndIcon-Settings">
                            <img alt="" src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`} className="profilePicture-Settings"></img>
                            {
                                props.userData.status && <StatusIcon className="statusIcon-Settings" status={props.userData.status}/>
                            }
                        </div>
                        <div className="profileInfo-Settings">
                            <p title={`${props.userData.displayName} - ${props.userData.school && props.userData.school.name}${props.userData.school && props.userData.school.razred===""?"":","} ${props.userData.school && props.userData.school.razred}`}>{props.userData.displayName}</p>
                        </div>
                    </div>
                    <div className="schoolLogo-Settings">
                            <img alt="" src={schoolImg} title={props.userData.school&&props.userData.school.name}></img>
                    </div>
                </div>
                <div className="mainSettings">
                    <div className="floatingDiv">
                        <div className="floatingContent">
                            <p>Vaš status:</p>
                            <div className="statusDropdown" style={styleDropdownSelector} onClick={dropdown}>
                                <div className="statusIconAndText">
                                    {
                                        props.userData.status && <StatusIcon status={props.userData.status} className="statusIconAndText-Icon"/>
                                    }
                                    <p>{props.userData.status && props.userData.status.display}</p>
                                </div>
                                <div className="arrowDown">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" style={{transform:styleDropdown.opacity!=="0"?"rotate(-180deg)":"",transition: 'transform 150ms ease'}}>
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
                                <a href={`https://eur.delve.office.com/?u=${props.userData.id}&v=editprofile`} target="_blank" rel="noopener noreferrer">Kliknite tukaj za odpiranje portala Office</a>
                            </div>
                        </div>
                        <div className="floatingDiv" style={styleAppInfoSelector}>
                            <div className="floatingContent" onClick={dropdownAppInfo}>
                                <p>O aplikaciji ŠCVApp:</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" style={{transform:styleAppInfo.opacity==="0"?"rotate(-90deg)":"",transition: 'transform 150ms ease'}}>
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                            </div>
                            <div className="aboutSchoolDropdown" style={styleAppInfo}>
                                <div>
                                    Aplikacija je bila ustvarjena v sklopu raziskovalne naloge, šolskega leta 2021/2022. Namenjena je dijakom in zaposlenim na ŠC 
                                    Velenje. Ustanovitelja aplikacije sta <b title={easterEggText}>Urban Krepel</b> in <b title={easterEggText}>Blaž Osredkar</b>.<br /><br /><br />
                                    Navodila, kako uporabljati aplikacijo, imate <a href="https://www.youtube.com/user/scvvideo">na tej povezavi</a> (YouTube video).<br /><br /><br />
                                    Za več informacij pišite na: <a href="mailto:info.app@scv.si">info.app@scv.si</a>
                                </div>
                            </div>
                        </div>
                </div>
            </main>
        </div>
    )
}