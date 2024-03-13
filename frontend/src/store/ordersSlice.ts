import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppDispatch } from ".";
import { api } from "../utils/api";

export type OrderProps = {
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
      toast.success("Status alterado com sucesso.");
      return state;
    },
    add(state, { payload }: PayloadAction<Omit<OrderProps, "id, status">>) {
      state.orders.push(payload);
      toast.success("Pedido incluído com sucesso.");
      return state;
    },
  },
});

export const { setOrders, setStatus, add } = slice.actions;

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

export function asyncAdd(name: string, address: string) {
  return async function (dispatch: AppDispatch) {
    const accessToken = localStorage.getItem("@delliv:accessToken");
    const response = await api.post(
      `/orders`,
      { name, address, status: "Pendente" },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(add(response.data));
  };
}
