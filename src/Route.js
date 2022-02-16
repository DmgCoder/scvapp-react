import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./404page/404page";

import AboutPage from "./aboutPage/aboutPage.js"

const RoutePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="/domov" element={<HomePage />} />
                    <Route path="/malice" element={<HomePage />} />
                    <Route path="/easistent" element={<HomePage />}/>
                    <Route path="/nastavitve" element={<HomePage />}/>
                    <Route path="/arnes-ucilnice" element={<HomePage />}/>
                    <Route path="/prijava" element={<LoginPage />}/>
                    <Route path="/o-nas" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage