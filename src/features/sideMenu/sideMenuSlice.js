import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideMenuOpen: true,
  sideMenuMini: false,
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setOpenSideMenu: (state, actions) => {
      state.sideMenuOpen = actions.payload;
    },
    setMiniSideMenu: (state, actions) => {
      state.sideMenuMini = actions.payload;
    },
  },
});

export const { setOpenSideMenu, setMiniSideMenu } = sideMenuSlice.actions;

export const selectSideMenuOpen = (state) => state.sideMenu.sideMenuOpen;
export const selectSideMenuMini = (state) => state.sideMenu.sideMenuMini;

export default sideMenuSlice.reducer;
