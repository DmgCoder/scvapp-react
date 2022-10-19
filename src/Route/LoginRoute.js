import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectLoading,
  login,
  setLoading,
} from "../features/user/userSlice";
import getUserData from "../features/user/userGetData";
import { Route, Routes } from "react-router";
import { Router, useSearchParams } from "react-router-dom";
import { setAlert } from "../features/alert/alertSlice";

const LoadingPage = lazy(() => import("../pages/LoadingPage"));
const LoginPage = lazy(() => import("../pages/loginPage/loginPage"));
const HomePage = lazy(() => import("../pages/homePage/homePage"));
const AdminRoute = lazy(() => import("./AdminRoute"));

const LoginRoute = () => {
  const user = useSelector(selectUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const userData = await getUserData();
      dispatch(login(userData));
      dispatch(setLoading(false));
    }
    loadData();
  }, [dispatch]);

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
