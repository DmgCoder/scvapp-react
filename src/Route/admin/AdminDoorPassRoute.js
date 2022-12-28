import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import LoadingPage from "../../pages/LoadingPage";
import { useDoorPasses } from "../../features/doorPasses/useDoorPasses";

const AdminDoorPassDashboard = lazy(() =>
  import("../../pages/adminPanel/adminDoorPass/dashboard/dashboard")
);

const AdminDoorPassCreate = lazy(() =>
  import("../../pages/adminPanel/adminDoorPass/create/create")
);

const AdminDoorPassShow = lazy(() =>
  import("../../pages/adminPanel/adminDoorPass/show/show")
);

const NotFound = lazy(() => import("../../pages/404page/404page"));

const AdminDoorPassRoute = () => {
  const { doorPasses, refresh } = useDoorPasses();

  useEffect(() => {
    if (!doorPasses) {
      refresh();
    }
  }, [refresh, doorPasses]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<LoadingPage />}>
        <Routes path="/door-pass">
          <Route path="/" element={<AdminDoorPassDashboard />} />
          <Route path="/create" element={<AdminDoorPassCreate />} />
          <Route path="/show/:name_id" element={<AdminDoorPassShow />} />
          <Route
            path="*"
            element={<NotFound location={"/admin/door-pass"} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AdminDoorPassRoute;
