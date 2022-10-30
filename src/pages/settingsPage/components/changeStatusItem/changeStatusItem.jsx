import React from "react";
import StatusIcon from "../../../../components/StatusIcon";

import "./changeStatusItem.css";

const ChangeStatusItem = ({ name, title }) => {
  return (
    <div className="settings-change-status-item">
      <div className="settings-change-status-item-icon">
        <StatusIcon name={name} />
      </div>
      <p>{title ?? "unknown"}</p>
    </div>
  );
};

export default ChangeStatusItem;
