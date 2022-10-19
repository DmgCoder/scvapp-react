import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/userSlice";
import themeReducer from "../../features/theme/themeSlice";
import alertReducer from "../../features/alert/alertSlice";
import sideMenuReducer from "../../features/sideMenu/sideMenuSlice";
import mealUserReducer from "../../features/mealUser/mealUserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    alert: alertReducer,
    sideMenu: sideMenuReducer,
    mealUser: mealUserReducer,
  },
});
