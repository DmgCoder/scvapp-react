import { GetAllDoorPasses } from "../../pages/adminPanel/adminDoorPass/adminDoorPassAPI";
import { setDoorPasses, selectDoorPasses } from "./doorPassesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useDoorPasses = () => {
  const doorPasses = useSelector(selectDoorPasses);
  const dispatch = useDispatch();

  const loadData = async () => {
    const doorPassesData = await GetAllDoorPasses();
    dispatch(setDoorPasses(doorPassesData));
  };

  return { doorPasses, refresh: loadData };
};

export { useDoorPasses };
