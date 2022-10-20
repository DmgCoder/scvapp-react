import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import StyledTextField from "../../../../components/StyledTextField";

import "./create.css";

import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

const Create = () => {
  const theme = useSelector(selectTheme);
  const [name, setName] = React.useState("");

  return (
    <div className={`admin-door-pass-create ${theme}`}>
      <div className="admin-door-pass-create-form">
        <div className="admin-door-pass-create-form-title">
          <MeetingRoomOutlinedIcon />
          <h1>Dodajanje novih vrat</h1>
        </div>
        <StyledTextField
          label="Ime"
          variant="outlined"
          color="primary"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fontcolor="currentColor"
        />
      </div>
    </div>
  );
};

export default Create;
