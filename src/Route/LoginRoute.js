import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Route, Routes } from "react-router-dom";
import { setAlert } from "../features/alert/alertSlice";
import { useUser } from "../features/user/userHook";

const LoadingPage = lazy(() => import("../pages/LoadingPage"));
const LoginPage = lazy(() => import("../pages/loginPage/loginPage"));
const HomePage = lazy(() => import("../pages/homePage/homePage"));
const AdminRoute = lazy(() => import("./admin/AdminRoute"));

const LoginRoute = () => {
  const { user, loading } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const successParameter = searchParams.get("success");
      if (successParameter === "signin") {
        searchParams.delete("success");
        setSearchParams(searchParams);
        dispatch(
          setAlert({
            type: "success",
            message: "Uspešno ste se prijavili v ŠCVApp",
            title: "Uspešna prijava",
            show: true,
          })
        );
      }
    }
  }, [user, dispatch, searchParams]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : !user ? (
        <LoginPage />
      ) : (
        <Routes path="/">
          <Route path="admin/*" element={<AdminRoute />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
};

export default LoginRoute;
