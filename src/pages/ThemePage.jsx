import React, { useEffect } from "react";
import { useSession } from "react-use-session";
import { useTheme } from "../features/theme/themeHook";

const ThemePage = () => {
  const { session } = useSession("theme", true);
  const { setAppTheme } = useTheme();

  useEffect(() => {
    if (!session) {
      setAppTheme("system-theme");
    } else {
      setAppTheme(session);
    }
  }, [session]);
  return <></>;
};

export default ThemePage;
