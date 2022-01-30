import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolPage from "../pages/schoolPage";

export default function MainPage(props){
    return (
        <div style={props.style}>
            <SchoolPage />
        </div>
    )
}