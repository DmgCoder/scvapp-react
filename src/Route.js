import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./aboutPage/aboutPage.js";
import { AdminRoute } from "./adminPage/route";

import NotFoundPage from "./404page/404page";
import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/prijava" element={<LoginPage />} />
        <Route path="/o-nas" element={<AboutPage />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
