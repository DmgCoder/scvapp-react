import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import LoadingPage from "../../pages/LoadingPage";

const AdminDashboard = React.lazy(() =>
  import("../../pages/adminPanel/adminDashboard/adminDashboard")
);
const NotFound = React.lazy(() => import("../../pages/404page/404page"));
const AdminScheduleEdit = React.lazy(() =>
  import("../../pages/adminPanel/adminScheduleEdit/adminScheduleEdit")
);
const AdminDoorPassRoute = React.lazy(() => import("./AdminDoorPassRoute"));

const AdminRoute = () => {
  const user = useSelector(selectUser);
  if (user?.isAdmin !== true) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <AdminDashboard />
      <Suspense fallback={<LoadingPage />}>
        <Routes path="admin">
          <Route path="schedule-edit" element={<AdminScheduleEdit />} />
          <Route path="door-pass/*" element={<AdminDoorPassRoute />} />
          <Route path="*" element={<NotFound location={"/admin"} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AdminRoute;
