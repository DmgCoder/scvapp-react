import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUser, selectLoading } from "../features/user/userSlice";
import LoadingPage from "../pages/LoadingPage";

const AdminDashboard = React.lazy(() =>
  import("../pages/adminPanel/adminDashboard/adminDashboard")
);
const NotFound = React.lazy(() => import("../pages/404page/404page"));

const AdminRoute = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  if (user?.isAdmin !== true && loading === false) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<LoadingPage />}>
        <Routes path="admin">
          <Route path="/" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AdminRoute;
