import { createSlice } from "@reduxjs/toolkit";

//create theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light-theme",
  },
  reducers: {
    setTheme: (state, action) => {
      const newTheme = action.payload;
      if (newTheme === "light-theme" || newTheme === "dark-theme") {
        state.theme = newTheme;
      }
    },
  },
});

//export theme slice actions
export const { setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

//export theme slice reducer
export default themeSlice.reducer;
