import React from "react";

const LogItem = ({ date, doorName, userID }) => {
  return (
    <p>
      {date}: {doorName}, {userID}
    </p>
  );
};

export default LogItem;
