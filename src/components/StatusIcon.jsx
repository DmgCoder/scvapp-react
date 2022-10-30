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

  const getStatusIcon = () => {
    if (!name || name === "") {
      setStatusIcon(user?.status?.id);
    }
  };

  const statusIcons = {
    available: <AvailableIcon title={user?.status?.display ?? "unknown"} />,
    busy: <BusyIcon title={user?.status?.display ?? "unknown"} />,
    away: <AwayIcon title={user?.status?.display ?? "unknown"} />,
    brb: <BrbIcon title={user?.status?.display ?? "unknown"} />,
    offline: <OfflineIcon title={user?.status?.display ?? "unknown"} />,
    unknown: <UnknownIcon title={user?.status?.display ?? "unknown"} />,
    dnd: <DndIcon title={user?.status?.display ?? "unknown"} />,
  };

  useEffect(getStatusIcon, [user, name]);

  return (
    <div
      title={user?.status?.display ?? "unknown"}
      style={{ color: theme === "dark-theme" ? "black" : "white" }}
    >
      {statusIcons[statusIcon ?? "unknown"] ?? UnknownIcon}
    </div>
  );
};

export default StatusIcon;
