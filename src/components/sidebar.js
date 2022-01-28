import React from "react";

import "./sidebar.css"

import SidebarLink from "./sidebarLink";

class SideBar extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="sidebar">
                <ul>
                    <SidebarLink name="Domov" icon="🏠" />
                    <SidebarLink name="Urnik" icon="🗓" />
                    <SidebarLink name="Malice" icon="🍽" />
                    <SidebarLink name="eAsistent" icon="⌘" />
                    <SidebarLink name="Nastavitve" icon="⚙️" />
                </ul>
                </div>

            </div>
        )
    }
}

export default SideBar