import React, { useEffect } from "react";

import "./selectForm.css";

const SelectForm = ({ title, arrayOfOptions, onChange, defualtSelectedID }) => {
  const [selectedOption, setSelectedOption] = React.useState({});

  const handleChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  useEffect(() => {
    if (defualtSelectedID) {
      const option = arrayOfOptions.find(
        (option) => option.id === defualtSelectedID
      );
      handleChange(option);
    }
  }, [defualtSelectedID]);

  return (
    <div className="admin-select-form">
      <p>{title}</p>
      <div className="admin-select-form-options">
        {arrayOfOptions &&
          arrayOfOptions.map((option) => (
            <p
              key={option.id}
              onClick={() => handleChange(option)}
              className={
                selectedOption.id === option.id
                  ? "admin-select-form-options-selected"
                  : ""
              }
            >
              {option.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SelectForm;
