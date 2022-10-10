import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSlice";

import { ReactComponent as AvailableIcon } from "../assets/status_icons/available.svg";
import { ReactComponent as BusyIcon } from "../assets/status_icons/busy.svg";
import { ReactComponent as AwayIcon } from "../assets/status_icons/away.svg";
import { ReactComponent as BrbIcon } from "../assets/status_icons/brb.svg";
import { ReactComponent as OfflineIcon } from "../assets/status_icons/offline.svg";
import { ReactComponent as UnknownIcon } from "../assets/status_icons/unknown.svg";
import { ReactComponent as DndIcon } from "../assets/status_icons/dnd.svg";

const StatusIcon = ({ name }) => {
  const theme = useSelector(selectTheme);

  const statusIcons = {
    available: <AvailableIcon />,
    busy: <BusyIcon />,
    away: <AwayIcon />,
    brb: <BrbIcon />,
    offline: <OfflineIcon />,
    unknown: <UnknownIcon />,
    dnd: <DndIcon />,
  };
  return (
    <div
      title={`${name} status`}
      style={{ color: theme === "dark-theme" ? "black" : "white" }}
    >
      {statusIcons[name] ?? UnknownIcon}
    </div>
  );
};

export default StatusIcon;
