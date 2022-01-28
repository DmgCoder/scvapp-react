import React from "react";

class SidebarLink extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>
                    <div className="link">
                        <p>{this.props.icon}</p>
                        <span className="item">{this.props.name}</span>
                    </div>
                    </a>
                </li>
        )
    }
}

export default SidebarLink