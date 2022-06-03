import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";
import NotFoundPage from "./404page/404page";

import AboutPage from "./aboutPage/aboutPage.js";
import { AdminRoute } from "./adminPage/route";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/domov" element={<HomePage />} />
          <Route path="/malice" element={<HomePage />} />
          <Route path="/malice/prijava" element={<HomePage />} />
          <Route path="/easistent" element={<HomePage />} />
          <Route path="/nastavitve" element={<HomePage />} />
          <Route path="/arnes-ucilnice" element={<HomePage />} />
          <Route path="/prijava" element={<LoginPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/admin/ureditevUrnikov" element={<AdminRoute />} />
          <Route path="/admin/ticket" element={<AdminRoute />} />
          <Route path="/admin/ticket/home" element={<AdminRoute />} />
          <Route path="/admin/ticket/my" element={<AdminRoute />} />
          <Route path="/admin/ticket/open" element={<AdminRoute />} />
          <Route path="/admin/ticket/closed" element={<AdminRoute />} />
          <Route path="/admin/ticket/all" element={<AdminRoute />} />
          <Route
            path="/admin/ticket/show/:ticket_id"
            element={<AdminRoute />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
