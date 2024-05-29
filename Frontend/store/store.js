import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import TeacherSlice from "./TeacherSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    teacher: TeacherSlice,
  },
});

export default store;
