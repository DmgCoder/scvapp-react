import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import { useSession } from "react-use-session";

const ThemePage = () => {
  const { session, save } = useSession("theme", true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!session) {
      save("light-theme");
      dispatch(setTheme("light-theme"));
    } else {
      dispatch(setTheme(session));
    }
  }, []);
  return <></>;
};

export default ThemePage;
