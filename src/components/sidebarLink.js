import React from "react";

class SidebarLink extends React.Component{
    render(){
        return(
            <li className={`sideLink ${this.props.className} ${this.props.pathname == this.props.href && "active"}`}>
                <a href={this.props.href}>
                    <div className="link">
                        <div className="icon">{this.props.children}</div>
                        <span className="item">{this.props.name}</span>
                    </div>
                    </a>
                </li>
        )
    }
}

export default SidebarLink