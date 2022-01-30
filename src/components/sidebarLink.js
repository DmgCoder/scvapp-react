import React from "react";

class SidebarLink extends React.Component{
    render(){
        return(
            <li className={`sideLink ${this.props.className}`}>
                <a href={this.props.href}>
                    <div className="link">
                        <p className="icon">{this.props.icon}</p>
                        <span className="item">{this.props.name}</span>
                    </div>
                    </a>
                </li>
        )
    }
}

export default SidebarLink