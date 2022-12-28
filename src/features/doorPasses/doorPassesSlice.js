import { createSlice } from "@reduxjs/toolkit";
export const doorPassSlice = createSlice({
  name: "doorPasses",
  initialState: {
    doorPasses: null,
    logUsersIDs: null,
  },
  reducers: {
    setDoorPasses: (state, action) => {
      state.doorPasses = action.payload;
    },
    setLogUsersIDs: (state, action) => {
      state.logUsersIDs = action.payload;
    },
  },
});

export const { setDoorPasses, setLogUsersIDs } = doorPassSlice.actions;

export const selectDoorPasses = (state) => state.doorPasses.doorPasses;

export const selectLogUsersIDs = (state) => state.doorPasses.logUsersIDs;

export default doorPassSlice.reducer;
