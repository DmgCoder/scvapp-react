import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import { useSession } from "react-use-session";

const ThemePage = () => {
  const { session, save } = useSession("theme", true);
  const dispatch = useDispatch();

  const getSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  useEffect(() => {
    if (!session) {
      save("system-theme");
      dispatch(setTheme(getSystemTheme()));
    } else {
      const theme = session;
      if (theme === "system-theme") {
        dispatch(setTheme(getSystemTheme()));
      } else {
        dispatch(setTheme(theme));
      }
    }
  }, []);
  return <></>;
};

export default ThemePage;
