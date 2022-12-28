import React from "react";
import { useEffect } from "react";
import { useSession } from "react-use-session";
import { useTheme } from "../../../../features/theme/themeHook";
import SelectSchoolDropdown from "../../../adminPanel/components/selectSchoolDropdown/selectSchoolDropdown";

const ChangeTheme = () => {
  const { session, save } = useSession("theme", true);
  const { setAppTheme, theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState("system-theme");
  const themeOptions = {
    "light-theme": "Svetla",
    "dark-theme": "Temna",
    "system-theme": "Sistemsko",
  };
  const handleLoad = () => {
    if (Object.keys(themeOptions).includes(session)) {
      setSelectedTheme(session);
    }
  };

  const handleChange = (e) => {
    const theme = e.target.id;
    if (Object.keys(themeOptions).includes(theme)) {
      setAppTheme(theme);
      save(theme);
    }
  };

  useEffect(handleLoad, [session, theme]);

  return (
    <SelectSchoolDropdown
      schools={themeOptions}
      selectedSchool={selectedTheme}
      selectSchool={handleChange}
    />
  );
};

export default ChangeTheme;
