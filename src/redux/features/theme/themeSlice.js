import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
  rightSide: "none",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
    setRightSide: (state, action) => {
      state.rightSide = action.payload;
    },
  },
});

export const { setThemeMode, setRightSide } = themeSlice.actions;

export default themeSlice.reducer;
