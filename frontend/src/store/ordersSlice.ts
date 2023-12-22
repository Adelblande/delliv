import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import { api } from "../utils/api";

type OrderProps = {
  id: string;
  name: string;
  address: string;
  status: string;
};

const slice = createSlice({
  name: "orders",
  initialState: {
    orders: [] as OrderProps[],
  },
  reducers: {
    setOrders(state, { payload }: PayloadAction<OrderProps[]>) {
      return { ...state, orders: payload };
    },
    setStatus(state, { payload }: PayloadAction<OrderProps>) {
      const index = state.orders.findIndex((order) => order.id === payload.id);
      state.orders[index].status = payload.status;
      return state;
    },
  },
});

export const { setOrders, setStatus } = slice.actions;

export default slice.reducer;

export function asyncFetchOrders() {
  return async function (dispatch: AppDispatch) {
    const accessToken = localStorage.getItem("@delliv:accessToken");
    const response = await api.get("/orders", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    dispatch(setOrders(response.data));
  };
}
export function asyncSetStatus(id: string, status: string) {
  return async function (dispatch: AppDispatch) {
    const accessToken = localStorage.getItem("@delliv:accessToken");
    const response = await api.patch(
      `/orders/${id}`,
      { status },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(setStatus(response.data));
  };
}
