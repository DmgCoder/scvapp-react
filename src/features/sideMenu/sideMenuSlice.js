import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideMenuOpen: true,
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
  },
});

export const { toggleSideMenu } = sideMenuSlice.actions;

export const selectSideMenuOpen = (state) => state.sideMenu.sideMenuOpen;

export default sideMenuSlice.reducer;
