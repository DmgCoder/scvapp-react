import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingPage from "../pages/LoadingPage";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../features/theme/themeHook";

const LoginRoute = lazy(() => import("./LoginRoute"));
const AboutPage = lazy(() => import("../pages/aboutPage/aboutPage"));
const ThemePage = lazy(() => import("../pages/ThemePage"));
const MobileAppInstall = lazy(() => import("../pages/MobileAppInstall"));

const RoutePage = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <ThemePage />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/mobile" element={<MobileAppInstall />} />
          <Route path="*" element={<LoginRoute />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          style={{ maxWidth: "calc(100% - 70px)", right: "5px", left: "auto" }}
          hideProgressBar={true}
          autoClose={3000}
          pauseOnHover={false}
          theme={theme === "dark-theme" ? "dark" : "light"}
        />
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutePage;
