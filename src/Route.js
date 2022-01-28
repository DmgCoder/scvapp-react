import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";
import React, { useEffect } from "react";

const title = "ŠCV App"

const RoutePage = () => {

    useEffect(()=>{
        document.title = title
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage