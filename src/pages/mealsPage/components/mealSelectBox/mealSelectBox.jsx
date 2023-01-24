import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import getWindowDimensions from "../../../../features/useWindowDimensions";

import "./mealSelectBox.css";

import MesniMeni from "../../../../assets/slike_malica/mesni_meni.png";

const MealSelectBox = ({ selected }) => {
  const theme = useSelector(selectTheme);
  const { width } = getWindowDimensions();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (width < 450) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className={`meal-select-box ${theme}`}>
      <div className="meal-select-box-side meal-select-box-side-left">
        {!isMobile && (
          <p>
            <b>Mesni meni</b>
          </p>
        )}
        <p className="meal-select-box-side-description">
          Čufti v paradižnikovi omaki, pire krompir, solata
        </p>
      </div>
      <div className="meal-select-box-side meal-select-box-side-right">
        {!isMobile && (
          <button
            className={`${selected && "meal-selected"} meal-select-box-btn`}
          >
            {selected ? "Izbrani meni" : "Izberi meni"}
          </button>
        )}
        {isMobile && (
          <div className="meal-select-box-side-right-up">
            <b>Mesni meni</b>
            <button
              className={`${selected && "meal-selected"} meal-select-box-btn`}
            >
              {selected ? "Izbrani meni" : "Izberi meni"}
            </button>
          </div>
        )}
        <img src={MesniMeni} alt="mesni meni" className="meal-select-box-img" />
      </div>
    </div>
  );
};

export default MealSelectBox;
