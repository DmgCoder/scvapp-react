import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

import LoadingPage from "../pages/LoadingPage";
const AdminDashboard = React.lazy(() =>
  import("../pages/adminPanel/adminDashboard/adminDashboard")
);
const NotFound = React.lazy(() => import("../pages/404page/404page"));

const AdminRoute = () => {
  const user = useSelector(selectUser);
  if (user?.isAdmin !== true) {
    return <Navigate to="/" />;
  }
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes path="admin">
        <Route path="/" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRoute;
