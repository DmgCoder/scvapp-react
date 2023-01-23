import { useEffect } from "react";
import {
  selectSideMenuMini,
  selectSideMenuOpen,
  setMiniSideMenu,
  setOpenSideMenu,
} from "../../features/sideMenu/sideMenuSlice";
import useWindowDimensions from "../useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";

const useSideMenu = () => {
  const { width } = useWindowDimensions();
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  const sideMenuMini = useSelector(selectSideMenuMini);
  const dispatch = useDispatch();

  const resizeSideMenu = () => {
    if (width <= 1080) {
      dispatch(setMiniSideMenu(true));
    } else {
      dispatch(setMiniSideMenu(false));
      dispatch(setOpenSideMenu(true));
    }
  };

  const resizeOnLoad = () => {
    if (width <= 1080) {
      dispatch(setMiniSideMenu(true));
      dispatch(setOpenSideMenu(false));
    } else {
      dispatch(setMiniSideMenu(false));
      dispatch(setOpenSideMenu(true));
    }
  };

  const toggleSideMenu = () => {
    if (sideMenuMini) {
      dispatch(setOpenSideMenu(!sideMenuOpen));
    } else {
      dispatch(setOpenSideMenu(true));
    }
  };

  useEffect(resizeSideMenu, [width]);
  useEffect(resizeOnLoad, []);

  return { sideMenuOpen, sideMenuMini, toggleSideMenu };
};

export default useSideMenu;
