import { useSelector } from "react-redux";
import { logout } from "../../store/userSlice";
import { useEffect } from "react";
import { asyncFetchOrders } from "../../store/ordersSlice";
import { RootState, useAppDispatch } from "../../store";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(asyncFetchOrders());
  }, []);

  return (
    <>
      <h1>Pedidos</h1>
      <ul>
        {orders?.map((order) => (
          <li key={order.id}>
            {order.name} - {order.address} - {order.status}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(logout())}>
        Sair
      </button>
    </>
  );
}
