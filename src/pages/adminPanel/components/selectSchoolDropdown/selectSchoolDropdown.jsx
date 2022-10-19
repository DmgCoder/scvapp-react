import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./selectSchoolDropdown.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectSchoolDropdown = ({ schools, selectedSchool, selectSchool }) => {
  const theme = useSelector(selectTheme);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const clickSelectSchool = (e) => {
    selectSchool(e);
    setShowDropdown(false);
  };

  return (
    <div
      className={`admin-select-school-dropdown ${theme} ${
        showDropdown && "admin-select-school-dropdown-show"
      }`}
    >
      <p className="admin-select-school-dropdown-text">
        {schools[selectedSchool ?? ""] ?? "---"}
      </p>
      <button
        className="admin-selected-school-dropdown-btn"
        style={
          showDropdown
            ? { transform: "rotate(180deg)" }
            : { transform: "rotate(0deg)" }
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <KeyboardArrowDownIcon />
      </button>
      <div className="admin-select-school-dropdown-main">
        {Object.keys(schools)
          .filter((school) => school !== selectedSchool)
          .sort((a, b) => (a > b ? 1 : -1))
          .map((school, i) => (
            <p
              key={i}
              id={school}
              className="admin-select-school-dropdown-main-option"
              onClick={clickSelectSchool}
            >
              {schools[school]}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SelectSchoolDropdown;
