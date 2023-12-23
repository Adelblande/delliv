import { useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncFetchOrders } from "../../store/ordersSlice";
import { RootState, useAppDispatch } from "../../store";
import { TemplateHome } from "../../components/templates/TemplateHome";
import { BoxInline } from "../../components/molecules";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(asyncFetchOrders());
  }, []);

  return (
    <TemplateHome>
      <div>
        {orders?.map((order) => (
          <BoxInline data={order} />
        ))}
      </div>
    </TemplateHome>
  );
}
