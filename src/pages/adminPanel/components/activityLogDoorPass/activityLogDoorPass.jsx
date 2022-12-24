import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./activityLogDoorPass.css";
import { GetDoorPassLog } from "./loadLogDoorPass";
import LogItem from "./logItem";

const ActivityLogDoorPass = ({ doorPass }) => {
  const theme = useSelector(selectTheme);
  const [logs, setLogs] = useState(null);

  const handleLoad = async () => {
    if (doorPass === null) return;
    const data = await GetDoorPassLog(doorPass.code);
    if (data.status !== 200) return;
    setLogs(data.data);
  };

  useEffect(() => {
    handleLoad();
  }, [doorPass]);

  return (
    <div className={`admin-activity-log-door-pass ${theme}`}>
      {logs?.map((log, i) => (
        <LogItem
          key={i}
          date={log.created_at}
          doorName={doorPass.name_id}
          userID={log.user_pass.azure_id}
        />
      ))}
    </div>
  );
};

export default ActivityLogDoorPass;
