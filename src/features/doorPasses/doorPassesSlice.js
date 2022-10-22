import { createSlice } from "@reduxjs/toolkit";
export const doorPassSlice = createSlice({
  name: "doorPasses",
  initialState: {
    doorPasses: null,
  },
  reducers: {
    setDoorPasses: (state, action) => {
      state.doorPasses = action.payload;
    },
  },
});

export const { setDoorPasses, loadDoorPasses } = doorPassSlice.actions;

export const selectDoorPasses = (state) => state.doorPasses.doorPasses;

export default doorPassSlice.reducer;
