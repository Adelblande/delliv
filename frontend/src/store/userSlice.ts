import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from ".";
import { api } from "../utils/api";

export type UserProps = {
  id: string;
  email: string;
  name: string;
  isAuthenticated: boolean;
};

const slice = createSlice({
  name: "user",
  initialState: {
    id: "",
    email: "",
    name: "",
    isAuthenticated: false,
  },
  reducers: {
    login(state, { payload }: PayloadAction<UserProps>) {
      return {
        ...state,
        id: payload.id,
        email: payload.email,
        name: payload.name,
        isAuthenticated: true,
      };
    },
    logout(state) {
      localStorage.removeItem("@delliv:accessToken");
      return {
        ...state,
        id: "",
        email: "",
        name: "",
        isAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;

export function asyncLogin(email: string, password: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    const { data } = await api.post("/sessions", { email, password });
    localStorage.setItem("@delliv:accessToken", data.accessToken);
    dispatch(login(data.user));
  };
}
