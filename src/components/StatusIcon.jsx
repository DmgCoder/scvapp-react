import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSlice";
import { selectUser } from "../features/user/userSlice";

import { ReactComponent as AvailableIcon } from "../assets/status_icons/available.svg";
import { ReactComponent as BusyIcon } from "../assets/status_icons/busy.svg";
import { ReactComponent as AwayIcon } from "../assets/status_icons/away.svg";
import { ReactComponent as BrbIcon } from "../assets/status_icons/brb.svg";
import { ReactComponent as OfflineIcon } from "../assets/status_icons/offline.svg";
import { ReactComponent as UnknownIcon } from "../assets/status_icons/unknown.svg";
import { ReactComponent as DndIcon } from "../assets/status_icons/dnd.svg";

const StatusIcon = ({ name }) => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const [statusIcon, setStatusIcon] = useState(name);
  const [statusTitle, setStatusTitle] = useState("");

  const getStatusIcon = () => {
    if (!name || name === "") {
      setStatusIcon(user?.status?.id);
      setStatusTitle(user?.status?.display);
    }
  };

  const statusIcons = {
    available: <AvailableIcon title={statusTitle} />,
    busy: <BusyIcon title={statusTitle} />,
    away: <AwayIcon title={statusTitle} />,
    brb: <BrbIcon title={statusTitle} />,
    offline: <OfflineIcon title={statusTitle} />,
    unknown: <UnknownIcon title={statusTitle} />,
    dnd: <DndIcon title={statusTitle} />,
  };

  useEffect(getStatusIcon, [user, name]);

  return (
    <div
      title={statusTitle}
      style={{ color: theme === "dark-theme" ? "black" : "white" }}
    >
      {statusIcons[statusIcon ?? "unknown"] ?? UnknownIcon}
    </div>
  );
};

export default StatusIcon;
