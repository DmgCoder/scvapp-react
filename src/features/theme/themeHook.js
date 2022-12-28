import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "./themeSlice";
import { useSession } from "react-use-session";

export const useTheme = () => {
  const { save } = useSession("theme", true);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const getSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  const setAppTheme = (theme) => {
    if (theme === "system-theme") {
      save("system-theme");
      dispatch(setTheme(getSystemTheme()));
    } else {
      save(theme);
      dispatch(setTheme(theme));
    }
  };

  return { setAppTheme, theme };
};
