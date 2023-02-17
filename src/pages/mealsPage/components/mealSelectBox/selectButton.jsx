import React from "react";

const SelectButton = ({ selected }) => {
  return (
    <button className={`${selected && "meal-selected"} meal-select-box-btn`}>
      {selected ? "Izbran" : "Izberi meni"}
    </button>
  );
};

export default SelectButton;
