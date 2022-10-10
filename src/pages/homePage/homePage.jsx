import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { selectTheme } from "../../features/theme/themeSlice";

import "./homePage.css";

const MealsPage = lazy(() => import("../mealsPage/mealsMain"));
const SideMenu = lazy(() => import("../../components/SideMenu/sideMenu"));

const HomePage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`${theme} homePage`}>
      <SideMenu />
      <Routes path="/">
        <Route path="malica" element={<MealsPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;
