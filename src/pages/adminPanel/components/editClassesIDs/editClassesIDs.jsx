import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./editClassesIDs.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EditClassID from "../editClassID/editClassID";
import AddClass from "../addClass/addClass";

const EditClassesIDs = ({ classes, url, schoolID }) => {
  const theme = useSelector(selectTheme);
  const [page, setPage] = React.useState(1);
  const [classOnPage, setClassOnPage] = React.useState(null);

  const setClassesOnPage = () => {
    if (classes) {
      const data = Object.keys(classes)
        .filter((key) => key.startsWith(page.toString()))
        .sort((a, b) => a > b)
        .reduce((obj, key) => {
          obj[key] = classes[key];
          return obj;
        }, {});

      setClassOnPage(data);
    }
  };

  const handleNextPage = () => {
    if (page < 4) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useEffect(setClassesOnPage, [classes, page]);

  return (
    <div className={`admin-edit-classes-ids ${theme}`}>
      <AddClass schoolID={schoolID} />
      <div className="admin-edit-classes-ids-title">
        <p>Razred</p>
        <p>ID</p>
      </div>
      {classOnPage &&
        Object.keys(classOnPage).map((key) => (
          <EditClassID
            key={key}
            name={key}
            id={classOnPage[key]}
            url={url}
            schoolID={schoolID}
          />
        ))}
      <div className="admin-edit-classes-ids-navigator">
        <p>{page}. letniki</p>
        <button onClick={handlePrevPage}>
          <ChevronLeftIcon />
        </button>
        <button onClick={handleNextPage}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default EditClassesIDs;
