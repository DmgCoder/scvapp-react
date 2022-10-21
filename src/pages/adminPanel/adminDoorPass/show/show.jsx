import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTheme } from "../../../../features/theme/themeSlice";

//Import style
import "./show.css";

//Import components
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ActivityLogDoorPass from "../../components/activityLogDoorPass/activityLogDoorPass";

const Show = () => {
  const theme = useSelector(selectTheme);
  const { name_id } = useParams();
  return (
    <div className={`admin-door-pass-show ${theme}`}>
      <div className="admin-door-pass-show-content">
        <div id="right-side">
          <div className="admin-door-pass-show-content-header">
            <MeetingRoomOutlinedIcon />
            <p>C502</p>
          </div>
        </div>
        <div id="left-side">
          <p>Activity log:</p>
          <ActivityLogDoorPass />
        </div>
      </div>
    </div>
  );
};

export default Show;
