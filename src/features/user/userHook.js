import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, setLoading, selectLoading } from "./userSlice";
import getUserData from "./userGetData";

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);

  const loadData = async () => {
    const userData = await getUserData();
    dispatch(login(userData));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (!user) {
      loadData();
    }
  }, [dispatch]);

  return { user, loading, refresh: loadData };
};
