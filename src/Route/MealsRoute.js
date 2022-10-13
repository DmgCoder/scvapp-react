import React, { lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const MealsMain = lazy(() => import("../pages/mealsPage/mealsMain"));
const MealsLogin = lazy(() =>
  import("../pages/mealsPage/mealsLogin/mealsLogin")
);

const MealsRoute = () => {
  const mealsUser = null;
  const [mealsLoading, setMealsLoading] = React.useState(false);
  return mealsLoading ? (
    <LoadingPage />
  ) : mealsUser ? (
    <MealsMain />
  ) : (
    <MealsLogin />
  );
};

export default MealsRoute;
