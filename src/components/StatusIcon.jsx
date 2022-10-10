import React from "react";

import AvailableIcon from "../assets/status_icons/available.svg";
import BusyIcon from "../assets/status_icons/busy.svg";
import AwayIcon from "../assets/status_icons/away.svg";
import BrbIcon from "../assets/status_icons/brb.svg";
import OfflineIcon from "../assets/status_icons/offline.svg";
import UnknownIcon from "../assets/status_icons/unknown.svg";
import DndIcon from "../assets/status_icons/dnd.svg";

const StatusIcon = ({ name }) => {
  const statusIcons = {
    available: AvailableIcon,
    busy: BusyIcon,
    away: AwayIcon,
    brb: BrbIcon,
    offline: OfflineIcon,
    unknown: UnknownIcon,
    dnd: DndIcon,
  };
  return <img src={statusIcons[name] ?? UnknownIcon} alt={`${name} status`} />;
};

export default StatusIcon;
