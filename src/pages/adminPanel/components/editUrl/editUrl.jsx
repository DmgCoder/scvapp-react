import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./editUrl.css";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EditUrl = ({ url, changeUrl }) => {
  const theme = useSelector(selectTheme);
  const [editMode, setEditMode] = React.useState(false);
  const [newUrl, setNewUrl] = React.useState(url);
  const confirmEdit = () => {
    setEditMode(false);
    changeUrl(newUrl);
  };
  const cancelEdit = () => {
    setEditMode(false);
    setNewUrl(url);
  };
  return (
    <div className="admin-edit-url">
      <a href={url} target="_blank" rel="noreferrer">
        Povezava
      </a>
      <button onClick={() => setEditMode(!editMode)}>
        <ModeEditIcon />
      </button>
      {editMode && (
        <div className={`admin-edit-url-editor ${theme}`}>
          <textarea
            rows={5}
            cols={30}
            onChange={(e) => setNewUrl(e.target.value)}
          >
            {newUrl}
          </textarea>
          <div className="admin-edit-url-editor-buttons">
            <button onClick={confirmEdit}>
              <CheckIcon />
            </button>
            <button onClick={cancelEdit}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUrl;
