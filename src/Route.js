import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./404page/404page";

const RoutePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage