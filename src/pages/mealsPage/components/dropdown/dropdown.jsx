import React from "react";
import DropdownItem from "./dropdownItem";
import { useSession } from "react-use-session";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./dropdown.css";
import Person2Icon from "@mui/icons-material/Person2";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { clearMealUser } from "../../../../features/mealUser/mealUserSlice";

const Dropdown = () => {
  const theme = useSelector(selectTheme);
  const { clear } = useSession("user-meal");
  const dispatch = useDispatch();

  const handleLogout = () => {
    clear();
    dispatch(clearMealUser());
  };

  return (
    <div className={`top-menu-dropdown ${theme}`}>
      <DropdownItem text="Profil" icon={<Person2Icon />} />
      <DropdownItem text="Nastavitve" icon={<TuneIcon />} />
      <DropdownItem text="Priročnik za uporabo" icon={<InfoIcon />} />
      <DropdownItem
        text="Odjava"
        icon={<LogoutIcon />}
        onClick={handleLogout}
      />
    </div>
  );
};

export default Dropdown;
