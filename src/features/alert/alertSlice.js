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
    createAlert: (state, action) => {
      const data = action.payload.data;
      const successStatusCode = action.payload.successStatusCode ?? 200;
      const successMessage = action.payload.successMessage ?? "Success";
      if (data.status === successStatusCode) {
        state.alert = {
          type: "success",
          message: successMessage,
          title: "Uspešno!",
          show: true,
        };
      } else {
        const message =
          data.data.message || "Prišlo je do napake. Poskusite znova.";
        state.alert = {
          type: "error",
          message: message,
          title: "Napaka",
          show: true,
        };
      }
    },
  },
});

export const { setAlert, clearAlert, createAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert.alert;

export default alertSlice.reducer;
