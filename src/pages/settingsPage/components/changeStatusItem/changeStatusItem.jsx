import React from "react";
import StatusIcon from "../../../../components/StatusIcon";

import "./changeStatusItem.css";

const ChangeStatusItem = ({ name, title, onClick }) => {
  return (
    <div className="settings-change-status-item" onClick={() => onClick(name)}>
      <div className="settings-change-status-item-icon">
        <StatusIcon name={name} />
      </div>
      <p>{title ?? "unknown"}</p>
    </div>
  );
};

export default ChangeStatusItem;
