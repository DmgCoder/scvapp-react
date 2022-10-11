import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/userSlice";
import themeReducer from "../../features/theme/themeSlice";
import alertReducer from "../../features/alert/alertSlice";
import sideMenuReducer from "../../features/sideMenu/sideMenuSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    alert: alertReducer,
    sideMenu: sideMenuReducer,
  },
});
