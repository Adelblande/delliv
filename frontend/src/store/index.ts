import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./userSlice";
import ordersSlice from "./ordersSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    orders: ordersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
