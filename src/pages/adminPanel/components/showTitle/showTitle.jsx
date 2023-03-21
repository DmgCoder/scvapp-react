import React from "react";
import { useNavigate } from "react-router-dom";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";
import { RenameDoorPass } from "../../adminDoorPass/adminDoorPassAPI";

import StyledTextField from "../../../../components/StyledTextField";
import "./showTitle.css";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import useAlert from "../../../../features/alert/useAlert";

const ShowTitle = ({ doorPass }) => {
  const [edit, setEdit] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [showErrorForName, setShowErrorForName] = React.useState(null);
  const { refresh, doorPasses } = useDoorPasses();
  const navigate = useNavigate();
  const { createAlert } = useAlert();
  useEffect(() => {
    if (doorPass) setNewName(doorPass.name_id);
  }, [doorPass]);

  const handleEdit = async () => {
    if (!doorPass) return;
    await createAlert(
      RenameDoorPass(doorPass.code, newName),
      "Ime je bilo spremenjeno"
    );
    setEdit(false);
    refresh();
    navigate(`/admin/door-pass/show/${newName}`);
  };

  const handleCancel = () => {
    setEdit(false);
    setNewName(doorPass.name_id);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    const nameExists = doorPasses.find((doorPass) => {
      return doorPass.name_id === e.target.value;
    });
    if (nameExists && doorPass.name_id !== e.target.value) {
      setShowErrorForName("Ime že obstaja");
    } else {
      setShowErrorForName(null);
    }
  };

  return (
    <div className="admin-door-pass-show-content-header-title">
      {edit ? (
        <StyledTextField
          variant="standard"
          color="primary"
          type="text"
          error={showErrorForName !== null}
          helperText={showErrorForName}
          value={newName}
          onChange={handleNameChange}
          fontcolor="currentColor"
        />
      ) : (
        <p>{newName}</p>
      )}
      {!edit ? <EditIcon onClick={() => setEdit(true)} /> : <></>}
      {edit ? <CheckIcon onClick={handleEdit} /> : <></>}
      {edit ? <CloseIcon onClick={handleCancel} /> : <></>}
    </div>
  );
};

export default ShowTitle;
