import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AdminRoute = lazy(() => import("./adminPage/route"));
const HomePage = lazy(() => import("./homePage/homePage"));

const AboutPage = lazy(() => import("./aboutPage/aboutPage"));
const NotFoundPage = lazy(() => import("./404page/404page"));
const LoginPage = lazy(() => import("./loginPage/loginPage"));

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/prijava" element={<LoginPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutePage;
