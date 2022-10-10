import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { selectTheme } from "../../features/theme/themeSlice";
import LoadingPage from "../LoadingPage";

import "./homePage.css";

const MealsPage = lazy(() => import("../mealsPage/mealsMain"));
const SideMenu = lazy(() => import("../../components/SideMenu/sideMenu"));
const NotFoundPage = lazy(() => import("../404page/404page"));
const SchoolHomePage = lazy(() => import("../SchoolHomePage"));

const HomePage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`${theme} homePage`}>
      <SideMenu />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<SchoolHomePage />} />
          <Route path="/malica" element={<MealsPage />} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default HomePage;
