import React, { useState } from "react";
import "./topBar.css"

function TopBar(props){

    const [open, setOpen ] = useState(false)

    return(
        <div className="topbar">
            <ul className="topbar-nav">
                <li>
                    <a onClick={()=>setOpen(open?false:true)}>{props.userData.displayName}</a>
                    {open && <DropDownMenu userData={props.userData}/>}
                </li>
            </ul>
        </div>
    )
}

function DropDownMenu(props)
{
    function DropDownItem(props){
        return(
            <a className="menu-item" href={props.href}>
                {props.children}
            </a>
        )
    }

    return(
        <div className="dropdown">
            <DropDownItem>
                <p>Vaš mail: {props.userData.mail}</p>
            </DropDownItem>
            <DropDownItem href={`${process.env.REACT_APP_BACKEND_URL}/user/logout/`}>
                <p>Odjava</p>
            </DropDownItem>
        </div>
    )
}
export default TopBar