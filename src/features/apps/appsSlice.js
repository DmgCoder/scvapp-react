import { createSlice } from "@reduxjs/toolkit";

export const appsSlice = createSlice({
  name: "apps",
  initialState: {
    officeAppsShown: false,
  },
  reducers: {
    setOfficeAppsShown: (state, action) => {
      if (typeof action.payload === "boolean") {
        state.officeAppsShown = action.payload;
      }
    },
  },
});

export const { setOfficeAppsShown } = appsSlice.actions;

export const selectOfficeAppsShown = (state) => state.apps.officeAppsShown;

export default appsSlice.reducer;
