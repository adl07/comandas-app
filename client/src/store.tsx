import { configureStore } from "@reduxjs/toolkit";
import getUsersSlice from "./reducers/users";

export const store = configureStore({
  reducer: {
    users: getUsersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
