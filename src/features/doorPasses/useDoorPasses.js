import { GetAllDoorPasses } from "../../pages/adminPanel/adminDoorPass/adminDoorPassAPI";
import {
  setDoorPasses,
  selectDoorPasses,
  selectLogUsersIDs,
  setLogUsersIDs,
} from "./doorPassesSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useDoorPasses = () => {
  const doorPasses = useSelector(selectDoorPasses);
  const logUsersIDs = useSelector(selectLogUsersIDs);
  const dispatch = useDispatch();

  const loadData = async () => {
    const doorPassesData = await GetAllDoorPasses();
    dispatch(setDoorPasses(doorPassesData));
  };

  const getUserFromID = async (id) => {
    if (logUsersIDs) {
      const user = logUsersIDs.find((user) => user.id === id);
      if (user) {
        return user;
      }
    }
    await addUserToIDs(id);
  };

  const addUserToIDs = async (id) => {
    if (!id) return;
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/search/specificUser/${id}`,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      const newUser = {
        id: response.data.id,
        displayName: response.data.displayName,
      };
      if (logUsersIDs) {
        dispatch(setLogUsersIDs([...logUsersIDs, newUser]));
      } else {
        dispatch(setLogUsersIDs([newUser]));
      }
    }
  };

  return { doorPasses, refresh: loadData, getUserFromID };
};

export { useDoorPasses };
