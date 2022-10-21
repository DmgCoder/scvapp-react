import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import StyledTextField from "../../../../components/StyledTextField";

import "./create.css";

import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import SelectForm from "../../components/selectForm/selectForm";

const Create = () => {
  const theme = useSelector(selectTheme);
  const [name, setName] = React.useState("");
  const [minimumAccessLevel, setMinimumAccessLevel] = React.useState({});

  const accessLevelOptions = [
    {
      id: 0,
      name: "Admin",
    },
    {
      id: 1,
      name: "Učitelj",
    },
    {
      id: 2,
      name: "Učenec",
    },
  ];

  const handleAccessLevelChange = (option) => {
    setMinimumAccessLevel(option.id);
  };

  return (
    <div className={`admin-door-pass-create ${theme}`}>
      <div className="admin-door-pass-create-form">
        <div className="admin-door-pass-create-form-title">
          <MeetingRoomOutlinedIcon />
          <h1>Dodajanje novih vrat</h1>
        </div>
        <StyledTextField
          label="Učilnica"
          variant="standard"
          color="primary"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fontcolor="currentColor"
        />
        <SelectForm
          title={"MSS"}
          arrayOfOptions={accessLevelOptions}
          defualtSelectedID={1}
          onChange={handleAccessLevelChange}
        />
        <div className="admin-door-pass-create-form-button">
          <button>Ustvari</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
