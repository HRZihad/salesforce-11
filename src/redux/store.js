import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeSlice: themeReducer,
  },
});
