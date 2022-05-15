import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./changeSchedule.css";

export function AdminChangeSchedule() {
  const [selectSchoolDropdown, setSelectSchoolDropdown] = useState({
    display: "",
    opened: false,
  });

  const [schoolUrlPopUp, setSchoolUrlPopUp] = useState({
    display: "",
    opened: false,
  });

  const [createClassPopUp, setCreateClassPopUp] = useState({
    display: "",
    opened: false,
  });

  const [uniLinkInput, setUniLinkInput] = useState("");

  const [selectEditClasses, setSelectEditClasses] = useState(1);

  let schoolDisplayName = {
    ERS: "ERŠ",
    GIM: "GIM",
    SSD: "SSD",
    SSGO: "SŠGO",
    "---": "---",
  };

  const [scheduleSchoolData, setScheduleSchoolData] = useState([]);

  async function getScheduleSchoolData() {
    let json = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools`,
      {
        mode: "cors",
        credentials: "include",
        method: "GET",
      }
    ).catch((e) => {
      console.log(e);
    });
    if (json.status !== 200) {
      return;
    }
    let data = await json.json();
    setScheduleSchoolData(data);
  }

  useEffect(() => {
    getScheduleSchoolData();
  }, []);

  useEffect(() => {
    selectSchool("ERS");
    setUniLinkInput(
      (
        scheduleSchoolData.find((e) => e.selected === true) || {
          mainLink: "",
        }
      ).mainLink
    );
  }, [scheduleSchoolData]);

  function showCloseSelectSchoolDropdown() {
    if (!selectSchoolDropdown.opened) {
      setSelectSchoolDropdown({
        display: "flex",
        opened: true,
      });
    } else {
      setSelectSchoolDropdown({
        display: "",
        opened: false,
      });
    }
  }

  function showCloseUniLinkPopup() {
    if (schoolUrlPopUp.opened) {
      setSchoolUrlPopUp({
        display: "",
        opened: false,
      });
    } else {
      setSchoolUrlPopUp({
        display: "flex",
        opened: true,
      });
    }
  }

  function showCloseCreateClassPopUp() {
    if (createClassPopUp.opened) {
      setCreateClassPopUp({
        display: "",
        opened: false,
      });
    } else {
      setCreateClassPopUp({
        display: "flex",
        opened: true,
      });
    }
  }

  function selectSchool(id) {
    let newData = scheduleSchoolData;
    newData.forEach((school) => {
      if (school.id === id) {
        school.selected = true;
      } else {
        school.selected = false;
      }
    });
    setScheduleSchoolData(newData);
    if (selectSchoolDropdown.opened) {
      showCloseSelectSchoolDropdown();
    } else {
      showCloseSelectSchoolDropdown();
      setSelectSchoolDropdown({
        display: "",
        opened: false,
      });
    }
  }

  function selectSchoolFromLi(e) {
    selectSchool(e.target.id);
  }

  function changeUniLinkValue(e) {
    setUniLinkInput(e.target.value);
  }

  async function saveDiscardUniLink(e) {
    let id = e.target.id || "discard";
    if (id === "discard") {
      setUniLinkInput(
        (
          scheduleSchoolData.find((e) => e.selected === true) || {
            mainLink: "",
          }
        ).mainLink
      );
      showCloseUniLinkPopup();
    } else if (id === "save") {
      let schoolId = (
        scheduleSchoolData.find((e) => e.selected === true) || {
          id: "---",
        }
      ).id;

      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolId}`,
        {
          mode: "cors",
          credentials: "include",
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uniLink: uniLinkInput }),
        }
      ).catch((e) => {
        console.log(e);
      });
      if (res.status === 200) {
        showCloseUniLinkPopup();
        getScheduleSchoolData();
      }
    }
  }

  function getClasses() {
    let classes = (
      scheduleSchoolData.find((e) => e.selected === true) || {
        classes: [],
      }
    ).classes;
    let data = Object.keys(classes).map((key) => {
      return { razred: key, id: classes[key] };
    });
    return data
      .filter((e) => e.razred.startsWith(selectEditClasses.toString()))
      .sort((a, b) => {
        if (a.razred < b.razred) {
          return false;
        }
        return true;
      });
  }

  function changeEditClass(e) {
    let id = e.target.id || "";
    if (id === "upArrow") {
      if (selectEditClasses + 1 <= 4) {
        setSelectEditClasses(selectEditClasses + 1);
      }
    } else if (id === "downArrow") {
      if (selectEditClasses - 1 >= 1) {
        setSelectEditClasses(selectEditClasses - 1);
      }
    }
  }

  function getIdOfSelectedSchool() {
    return (
      scheduleSchoolData.find((e) => e.selected === true) || {
        id: "---",
      }
    ).id;
  }

  return (
    <div className="admin-schedule">
      <div className="admin-schedule-content">
        <Link className="admin-schedule-backbtn" to={"/admin"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000000"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <p>Izhod</p>
        </Link>
        <div className="admin-schedule-select-school">
          <p>Izbrana šola:</p>
          <div
            className="admin-schedule-select-school-dropdown"
            style={
              selectSchoolDropdown.opened
                ? {
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }
                : {}
            }
          >
            <p>
              {scheduleSchoolData.length > 0
                ? schoolDisplayName[getIdOfSelectedSchool() || "---"]
                : "---"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
              style={
                selectSchoolDropdown.opened
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform 150ms ease-in-out",
                    }
                  : { transition: "transform 150ms ease-in-out" }
              }
              onClick={showCloseSelectSchoolDropdown}
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <ul
              className="admin-schedule-select-school-dropdown-list"
              style={selectSchoolDropdown}
            >
              {scheduleSchoolData.length > 0 ? (
                scheduleSchoolData.map((school) => {
                  if (school.selected === true) {
                    return;
                  }
                  return (
                    <li
                      key={school.id}
                      onClick={selectSchoolFromLi}
                      id={school.id}
                    >
                      {schoolDisplayName[school.id]}
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className="admin-schedule-modify-uni-link">
          <p className="admin-schedule-modify-uni-link-text">
            Univerzalni link:
          </p>
          <div className="admin-schedule-modify-uni-link-edit">
            <a href={uniLinkInput} target="_blank" rel="noopener noreferrer">
              Klikni tukaj
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
              onClick={showCloseUniLinkPopup}
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            <div
              className="admin-schedule-modify-uni-link-edit-popup"
              style={schoolUrlPopUp}
            >
              <textarea value={uniLinkInput} onChange={changeUniLinkValue} />
              <div className="admin-schedule-modify-uni-link-edit-popup-buttons">
                <button id="save" onClick={saveDiscardUniLink}>
                  Shrani
                </button>
                <button id="discard" onClick={saveDiscardUniLink}>
                  Prekliči
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-schedule-classes">
          <div className="admin-schedule-classes-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
              onClick={showCloseCreateClassPopUp}
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
            <p>Razred</p>
            <p>ID razreda</p>
            <CreateNewClass
              style={createClassPopUp}
              closeOpen={showCloseCreateClassPopUp}
              schoolId={getIdOfSelectedSchool()}
              refreshData={getScheduleSchoolData}
              setViewedPage={setSelectEditClasses}
            />
          </div>
          <div className="admin-schedule-classes-edit">
            {getClasses().map((schoolClass) => {
              return (
                <ClassEdit
                  classIdName={schoolClass.razred}
                  classId={schoolClass.id}
                  key={schoolClass.razred}
                  schoolId={getIdOfSelectedSchool()}
                  refreshData={getScheduleSchoolData}
                />
              );
            })}
          </div>
          <div className="admin-schedule-classes-navigation">
            <p>Stran {selectEditClasses} od 4</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
              id="downArrow"
              onClick={changeEditClass}
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
              id="upArrow"
              onClick={changeEditClass}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassEdit({ classIdName, classId, schoolId, refreshData }) {
  const [editMode, setEditMode] = useState(false);
  const [classIdInput, setClassIdInput] = useState(classId);

  async function deleteClass() {
    if (
      window.confirm(
        `Ali res želite izbristati ${classIdName} iz šole ${schoolId}?`
      )
    ) {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolId}/${classIdName}`,
        {
          mode: "cors",
          credentials: "include",
          method: "DELETE",
        }
      ).catch((e) => {
        console.log(e);
      });
      if (res.status === 200) {
        refreshData();
      }
    }
  }

  async function editClass() {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolId}`,
      {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ className: classIdName, classId: classIdInput }),
      }
    ).catch((e) => {
      console.log(e);
    });
    if (res.status === 201) {
      refreshData();
      onOffEditMode();
    }
  }

  function onOffEditMode() {
    setEditMode(!editMode);
  }

  function discrdChanges() {
    setClassIdInput(classId);
    setEditMode(false);
  }

  return (
    <div className="admin-schedule-classes-edit-class">
      <p className="admin-schedule-classes-edit-class-name">{classIdName}</p>
      {editMode === false && (
        <div className="admin-schedule-classes-edit-class-id">
          <p>{classId}</p>
          <div className="admin-schedule-classes-edit-class-id-buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
              id="edit"
              onClick={onOffEditMode}
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
              id="delete"
              onClick={deleteClass}
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </div>
        </div>
      )}
      {editMode === true && (
        <div className="admin-schedule-classes-edit-class-id-edit">
          <input
            value={classIdInput}
            onChange={(e) => setClassIdInput(e.target.value)}
            type="text"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#1ebd33"
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
            onClick={editClass}
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#c91616"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={discrdChanges}
          >
            <path
              fillRule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fillRule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function CreateNewClass({
  style,
  closeOpen,
  schoolId,
  refreshData,
  setViewedPage,
}) {
  const [newClassName, setNewClassName] = useState("");
  const [newClassId, setNewClassId] = useState("");

  function changeClassName(e) {
    setNewClassName(e.target.value);
  }

  function changeClassId(e) {
    setNewClassId(e.target.value);
  }

  function discardAdding() {
    setNewClassId("");
    setNewClassName("");
    closeOpen();
  }

  async function createNewClass() {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolId}`,
      {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ className: newClassName, classId: newClassId }),
      }
    ).catch((e) => {
      console.log(e);
    });
    if (res.status === 201) {
      refreshData();
      let classNum = parseInt(newClassName.at(0)) || 1;
      if (classNum >= 1 && classNum <= 4) {
        setViewedPage(classNum);
      }
      setNewClassId("");
      setNewClassName("");
      closeOpen();
    }
  }

  return (
    <div className="admin-schedule-classes-create-class" style={style}>
      <input
        type={"text"}
        placeholder={"Prikazno ime razreda 2.TRB"}
        onChange={changeClassName}
        value={newClassName}
      />
      <input
        type={"text"}
        placeholder={"ID razreda eAsistent 462009"}
        onChange={changeClassId}
        value={newClassId}
      />
      <div className="admin-schedule-classes-create-class-buttons">
        <button id="save" onClick={createNewClass}>
          Ustvari
        </button>
        <button id="discard" onClick={discardAdding}>
          Prekliči
        </button>
      </div>
    </div>
  );
}
