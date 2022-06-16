import React from "react";
import { Link } from "react-router-dom";

class SidebarLink extends React.Component {
  render() {
    return (
      <li
        className={`sideLink ${this.props.className} ${
          detectIfActive(this.props.pathname, this.props.href) && "active"
        }`}
      >
        <Link to={this.props.href || ""}>
          <div className="link">
            <div className="icon">{this.props.children}</div>
            {this.props.size >= 300 ? (
              <span className="item">{this.props.name}</span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </li>
    );
  }
}

function detectIfActive(pathname, href) {
  if (
    (pathname === "/" && href === "/") ||
    (pathname === "/domov" && href === "/")
  ) {
    return true;
  } else if (href !== "/") {
    return pathname.startsWith(href);
  }
  return false;
}

export default SidebarLink;
