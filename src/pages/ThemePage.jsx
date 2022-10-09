import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import { useSession } from "react-use-session";

const ThemePage = () => {
  const { session, saveJWT, clear } = useSession("theme", true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!session) {
      saveJWT("light-theme");
      dispatch(setTheme("light-theme"));
    } else {
      dispatch(setTheme(session));
    }
  }, []);
  return <></>;
};

export default ThemePage;
