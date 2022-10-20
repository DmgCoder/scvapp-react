import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingPage from "../../pages/LoadingPage";

const AdminDoorPassDashboard = lazy(() =>
  import("../../pages/adminPanel/adminDoorPass/dashboard/dashboard")
);

const AdminDoorPassCreate = lazy(() =>
  import("../../pages/adminPanel/adminDoorPass/create/create")
);

const AdminDoorPassRoute = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<LoadingPage />}>
        <Routes path="/door-pass">
          <Route path="/" element={<AdminDoorPassDashboard />} />
          <Route path="/create" element={<AdminDoorPassCreate />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AdminDoorPassRoute;
