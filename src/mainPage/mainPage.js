import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const EasistentPage = lazy(() => import("../pages/eAsistentPage"));
const SchoolPage = lazy(() => import("../pages/schoolPage"));
const SettingsPage = lazy(() => import("../pages/settingsPage"));
const ArnesUcilnicePage = lazy(() => import("../pages/arnesUcilnicePage"));
const MaliceRoute = lazy(() => import("../malicePages/maliceRoute"));

export default function MainPage(props) {
  return (
    <div style={props.style}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <SchoolPage
                url={props.userData.school && props.userData.school.schoolUrl}
              />
            }
          />
          <Route
            path="/domov"
            element={
              <SchoolPage
                url={props.userData.school && props.userData.school.schoolUrl}
              />
            }
          />
          <Route path="/malice/*" element={<MaliceRoute />} />
          <Route
            path="/easistent"
            element={<EasistentPage url={props.eAUrlLink} />}
          />
          <Route
            path="/nastavitve"
            element={<SettingsPage userData={props.userData} />}
          />
          <Route path="/arnes-ucilnice" element={<ArnesUcilnicePage />} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>
      </Suspense>
    </div>
  );
}
