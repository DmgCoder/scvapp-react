//create alertSlice
import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: {
      type: "",
      message: "",
      title: "",
      show: false,
    },
  },
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    clearAlert: (state) => {
      state.alert = {
        type: "",
        message: "",
        title: "",
        show: false,
      };
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert.alert;

export default alertSlice.reducer;
