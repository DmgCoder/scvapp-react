import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectLoading,
  login,
  setLoading,
} from "../features/user/userSlice";
import getUserData from "../features/user/userGetData";

const LoadingPage = lazy(() => import("../pages/LoadingPage"));
const LoginPage = lazy(() => import("../pages/loginPage/loginPage"));
const HomePage = lazy(() => import("../pages/homePage/homePage"));

const LoginRoute = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const userData = await getUserData();
      dispatch(login(userData));
      dispatch(setLoading(false));
    }
    loadData();
  }, []);

  return (
    <>
      {loading ? <LoadingPage /> : !user ? <LoginPage /> : <HomePage />}{" "}
    </>
  );
};

export default LoginRoute;
