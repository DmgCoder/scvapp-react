import React, { useEffect, useRef, useState } from "react";

import "./scheduleItem.css"

import icon_dogodek from "../pictures/urnik_icons/dogodek.png"
import icon_nadomescanje from "../pictures/urnik_icons/nadomescanje.png"
import icon_odpadlo from "../pictures/urnik_icons/odpadlo.png"
import icon_zaposlitev from "../pictures/urnik_icons/zaposlitev.png"

export default function ScheduleItem(props){

    const [scheduleData,setScheduleData] = useState({})
    // ToDo: check if it would be possible to remove the slashes
    const [timeLeft,setTimeLeft] = useState("/")

    async function getScheduleData(){
        let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/schedule`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
        let data = null
        if(json.ok){
            data = await json.json()
        }
        if(data){
            setScheduleData(data)
        }
    }
    useEffect(()=>{
        getScheduleData()
    },[])
    useEffect(()=>{
        if(scheduleData.trenutnoNaUrniku&&scheduleData.trenutnoNaUrniku.naslednjaUra){
            if(scheduleData.trenutnoNaUrniku.naslednjaUra.zacetekUreM>=0){
                let inter = setInterval(()=>{
                    let zdaj = new Date()
                    let utcZdaj = Date.UTC(zdaj.getUTCFullYear(),zdaj.getUTCMonth(),zdaj.getUTCDate(),zdaj.getUTCHours(),zdaj.getUTCMinutes(),zdaj.getUTCSeconds())
                    

                    let differenc = scheduleData.trenutnoNaUrniku.naslednjaUra.zacetekUreM - utcZdaj
                    if(differenc >= 299000 && differenc<= 301000){
                        clearInterval(inter)
                        getScheduleData()
                    }
                    if(differenc>=0){
                        setTimeLeft(izMillisekundVMinuteinSekunde(differenc))
                    }else{
                        clearInterval(inter)
                        getScheduleData()
                    }
                },1000)
            }
        }
    },[scheduleData.trenutnoNaUrniku])
    if(scheduleData.trenutnoNaUrniku){
        return(
            <div className="scheduleItem" style={props.style}>
                <p>Trenutno na urniku</p>
                <ClassInfo trenutnoNaUrniku={scheduleData.trenutnoNaUrniku} userData={props.userData}/>
                <p>{`Sledi (čez ${timeLeft})`}</p>
                <ClassInfo trenutnoNaUrniku={scheduleData.trenutnoNaUrniku.naslednjaUra} userData={props.userData}/>
            </div>
        )
    }
    return(
        <></>
    )
}

function ClassInfo(props){
    let backgroundColor = ""
    let icon_status

    let [indexForUra, setIndexForUra] = useState(0)

    let classInfoRef = useRef()

    // let [topPos, setTopPos] = useState(0)

    let [showOtherInfo, setShowOtherInfo] = useState(false)

    
    if(!props.trenutnoNaUrniku){
        return(
            <div className="classInfo">
                <div className="classInfo-content">
                    <p className="classInfo-krajsava">/</p>
                    <div className="classInfo-ucilnica-ikona">
                        <p className="classInfo-ucilnica">/</p>
                        <img className="classInfo-ikona"></img>
                    </div>
                </div>
            </div>
        )
    }

    function changeIndexForUra(e){
        let target = e.target
        while(target.tagName!=="BUTTON"){
            target = target.parentElement
        }
        let targetName = target.name || ""
        if(targetName === "left"){//index down
            setIndexForUra(indexForUra>0?indexForUra-1:indexForUra)
        }else if(targetName === "right"){//indexUp
            setIndexForUra(indexForUra+1<props.trenutnoNaUrniku.ura.length?indexForUra+1:indexForUra)
        }
    }

    function showHideMoreInfo(){
        if(props.trenutnoNaUrniku.ura[indexForUra]){
            setShowOtherInfo(showOtherInfo===true?false:true)
        }
    }
    
    if(props.trenutnoNaUrniku.ura[indexForUra]){
        if(props.trenutnoNaUrniku.ura[indexForUra].nadomescanje){
            backgroundColor="#bfe5f0"
            icon_status = icon_nadomescanje
        }else if(props.trenutnoNaUrniku.ura[indexForUra].zaposlitev){
            backgroundColor="#FCEDD1"
            icon_status = icon_zaposlitev
        }else if(props.trenutnoNaUrniku.ura[indexForUra].odpadlo){
            backgroundColor="#FCE4E0"
            icon_status = icon_odpadlo
        }
    }
    let content 
    if(props.trenutnoNaUrniku.ura[indexForUra]&&props.trenutnoNaUrniku.ura[indexForUra].dogodek !== ""){
        content = (
            <div className="classInfo-content" style={{backgroundColor:"#FCEDD1"}}>
                <p className="classInfo-krajsava" style={{fontSize:"80%"}}>{props.trenutnoNaUrniku.ura[indexForUra]?props.trenutnoNaUrniku.ura[indexForUra].dogodek||"/":"/"}</p>
                <div className="classInfo-ucilnica-ikona">
                    <img className="classInfo-ikona" src={icon_dogodek} alt=""></img>
                </div>
            </div>
        )
    }else{
        content = (
            <div className="classInfo-content" style={{backgroundColor:backgroundColor}} onClick={showHideMoreInfo}>
                <p className="classInfo-krajsava">{props.trenutnoNaUrniku.ura[indexForUra]?props.trenutnoNaUrniku.ura[indexForUra].krajsava||"/":"/"}</p>
                <div className="classInfo-ucilnica-ikona">
                    <p className="classInfo-ucilnica">{props.trenutnoNaUrniku.ura[indexForUra]?props.trenutnoNaUrniku.ura[indexForUra].ucilnica||"/":"/"}</p>
                    <img className="classInfo-ikona" src={icon_status} alt=""></img>
                </div>
            </div>
        )
    }
    
    return(
        <div className="classInfo" ref={classInfoRef}>
            <div className="classInfo-onelLine">
                <button name="left" className="classInfo-btn" onClick={changeIndexForUra} style={{visibility:indexForUra>0?"":"hidden"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
                {content}
                <button name="right" className="classInfo-btn" onClick={changeIndexForUra} style={{visibility:indexForUra+1<props.trenutnoNaUrniku.ura.length?"":"hidden"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
            {
                props.trenutnoNaUrniku.ura[indexForUra] && <FloatingInfoWindow style={{display:showOtherInfo?"":"none",opacity:showOtherInfo?"1":"0",transition:"visibility 0.1s, opacity 0.2s ease-in-out",backgroundColor:props.userData.school?props.userData.school.color:""}} ura={props.trenutnoNaUrniku.ura[indexForUra]} trajanje={props.trenutnoNaUrniku.trajanje}/>
            }
            {
                showOtherInfo && <div className="classInfo-floatingWindow-close" onClick={showHideMoreInfo}></div>
            }
        </div>
    )
}

function FloatingInfoWindow(props){
    return(
        <div className="classInfo-floatingWindow" style={props.style}>
            <div className="classInfo-floatingWindow-line">
                <p>Učilnica:</p>
                <p>{props.ura.ucilnica||"/"}</p>
            </div>
            <div className="classInfo-floatingWindow-line">
                <p>Učitelj:</p>
                <p>{props.ura.ucitelj||"/"}</p>
            </div>
            <div className="classInfo-floatingWindow-line">
                <p>Trajanje:</p>
                <p>{props.trajanje||"/"}</p>
            </div>
        </div>
    )
}

function izMillisekundVMinuteinSekunde(millis) {
    let minutes = Math.floor(millis / 60000)
    let seconds = Math.floor((millis % 60000) / 1000)
    return minutes + "min " + (seconds < 10 ? '0' : '') + seconds + "s"
}