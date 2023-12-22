import { useSelector } from "react-redux";
import { logout } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { asyncFetchOrders, asyncSetStatus } from "../../store/ordersSlice";
import { RootState, useAppDispatch } from "../../store";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);
  const [editItem, setEditItem] = useState("");

  function handleEdit() {}

  useEffect(() => {
    dispatch(asyncFetchOrders());
  }, []);

  return (
    <>
      <h1>Pedidos</h1>
      <div>
        {orders?.map((order) => (
          <div key={order.id}>
            <input type="text" disabled value={order.name} />
            <input type="text" disabled value={order.address} />
            <input type="text" disabled value={order.status} />

            <select
              name=""
              value={order.status}
              defaultValue={order.status}
              onChange={(value) =>
                dispatch(asyncSetStatus(order.id, value.target.value))
              }
            >
              <option value="pending" selected={order.status === "pending"}>
                Pendente
              </option>
              <option
                value="processing"
                selected={order.status === "processing"}
              >
                Processando
              </option>
              <option value="done" selected={order.status === "done"}>
                Finalizado
              </option>
            </select>
            {/* <button
              onClick={() => dispatch(asyncSetStatus(order.id, "processing"))}
            >
              Alterar
            </button> */}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => dispatch(logout())}>
        Sair
      </button>
    </>
  );
}
