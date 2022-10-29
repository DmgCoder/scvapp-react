import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSession } from "react-use-session";
import { useDispatch } from "react-redux";
import {
  selectMealUser,
  selectMealLoading,
  setMealUser,
} from "../features/mealUser/mealUserSlice";
import LoadingPage from "../pages/LoadingPage";

const MealsMain = lazy(() => import("../pages/mealsPage/mealsMain"));
const MealsLogin = lazy(() =>
  import("../pages/mealsPage/mealsLogin/mealsLogin")
);

const MealsRoute = () => {
  const mealsUser = useSelector(selectMealUser);
  const mealsLoading = useSelector(selectMealLoading);
  const dispatch = useDispatch();
  const { session } = useSession("user-meal");

  const getMealUser = () => {
    if (session) {
      dispatch(setMealUser(session));
    }
  };

  useEffect(getMealUser, []);

  return mealsLoading ? (
    <LoadingPage color={"rgb(237, 17, 100)"} />
  ) : mealsUser ? (
    <MealsMain />
  ) : (
    <MealsLogin />
  );
};

export default MealsRoute;
