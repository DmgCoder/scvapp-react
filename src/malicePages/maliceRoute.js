import React, { lazy, Suspense } from "react";
import { Routes, useLocation, Route } from "react-router";
const MaliceLoginPage = lazy(() => import("./maliceLoginPage"));
const MalicePage = lazy(() => import("./malicePage"));

export default function MaliceRoute(props) {
  let location = useLocation();

  let pathname = location.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, pathname.length - 1);
  }
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<MalicePage />} />
          <Route path="/prijava" element={<MaliceLoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
