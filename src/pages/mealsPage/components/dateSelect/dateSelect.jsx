import React from "react";
import DateSelectBox from "../dateSelectBox/dateSelectBox";

import "./dateSelect.css";

const DateSelect = () => {
  return (
    <div className="date-select-meals">
      <DateSelectBox
        dateName={"PONEDELJEK"}
        date={"8.04.2022"}
        title={"DANES"}
      />
    </div>
  );
};

export default DateSelect;
