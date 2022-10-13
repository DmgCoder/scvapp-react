import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";
import "./404page.css";

export default function NotFoundPage() {
  const theme = useSelector(selectTheme);
  return (
    <div id="notfound">
      <div className={`notfound ${theme}`}>
        <div className="notfound-404">
          <h1>
            4<span></span>4
          </h1>
        </div>
        <h2>Ups! Stran ne obstaja</h2>
        <p>Ta spletna stran ne obstaja.</p>
        <Link to="/">Nazaj na domačo stran</Link>
      </div>
    </div>
  );
}
