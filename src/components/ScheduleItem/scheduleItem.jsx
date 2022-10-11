import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

import "./scheduleItem.css";

import DogodekIcon from "../../assets/urnik_icons/dogodek.png";
import NadomescanjeIcon from "../../assets/urnik_icons/nadomescanje.png";
import OdpadloIcon from "../../assets/urnik_icons/odpadlo.png";
import ZaposlitevIcon from "../../assets/urnik_icons/zaposlitev.png";
import { useEffect } from "react";

const ScheduleItem = ({ title, classRoom, className, event, classType }) => {
  const user = useSelector(selectUser);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [icon, setIcon] = useState(null);

  const typesOfClasses = {
    nadomescanje: {
      icon: NadomescanjeIcon,
      color: "#bfe5f0",
    },
    odpadlo: {
      icon: OdpadloIcon,
      color: "#FCE4E0",
    },
    zaposlitev: {
      icon: ZaposlitevIcon,
      color: "#FCEDD1",
    },
    dogodek: {
      icon: DogodekIcon,
      color: "#FCEDD1",
    },
  };

  const setTypeOfClass = () => {
    if (classType) {
      setBackgroundColor(typesOfClasses[classType].color);
      setIcon(typesOfClasses[classType].icon);
    }
  };

  useEffect(setTypeOfClass, [classType]);

  return (
    <div
      className="schedule-item"
      style={{
        backgroundColor: backgroundColor ?? user?.school?.color,
      }}
    >
      <p className="schedule-item-title">{title}</p>
      {!event && (
        <p className="schedule-item-info">
          <b>{className ?? "/"}</b> V <b>{classRoom ?? "/"}</b>
        </p>
      )}
      {event && <p className="schedule-item-info">{event}</p>}
      {icon && (
        <img
          src={icon}
          alt="Icon for schedule"
          className="schedule-item-icon"
        />
      )}
    </div>
  );
};

export default ScheduleItem;
