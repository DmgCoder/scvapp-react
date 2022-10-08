import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginRoute = lazy(() => import("./LoginRoute"));
const AboutPage = lazy(() => import("../pages/aboutPage/aboutPage"));

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="*" element={<LoginRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutePage;
