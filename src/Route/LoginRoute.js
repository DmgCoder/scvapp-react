import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectLoading,
  login,
  setLoading,
} from "../features/user/userSlice";
import { setTheme } from "../features/theme/themeSlice";
import getUserData from "../features/user/userGetData";
import { useSession } from "react-use-session";

const LoadingPage = lazy(() => import("../pages/LoadingPage"));
const LoginPage = lazy(() => import("../pages/loginPage/loginPage"));
const HomePage = lazy(() => import("../pages/homePage/homePage"));

const LoginRoute = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { session, saveJWT, clearTheme } = useSession("theme");

  useEffect(() => {
    async function loadData() {
      const userData = await getUserData();
      dispatch(login(userData));
      dispatch(setLoading(false));

      if (!session) {
        saveJWT("light-theme");
        dispatch(setTheme("light-theme"));
      } else {
        dispatch(setTheme(session));
      }
    }
    loadData();
  }, []);

  return (
    <>{loading ? <LoadingPage /> : !user ? <LoginPage /> : <HomePage />}</>
  );
};

export default LoginRoute;
