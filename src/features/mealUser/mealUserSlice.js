import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
};

export const mealUserSlice = createSlice({
  name: "mealUser",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMealUser(state, action) {
      state.user = action.payload;
    },
    clearMealUser(state) {
      state.user = null;
    },
    setMealLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setMealUser, setMealLoading, clearMealUser } =
  mealUserSlice.actions;

export const selectMealUser = (state) => state.mealUser.user;
export const selectMealLoading = (state) => state.mealUser.loading;

export default mealUserSlice.reducer;
