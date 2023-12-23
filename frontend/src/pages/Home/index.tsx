import { useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncFetchOrders } from "../../store/ordersSlice";
import { RootState, useAppDispatch } from "../../store";
import { TemplateHome } from "../../components/templates/TemplateHome";
import { BoxInlineList } from "../../components/organisms";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(asyncFetchOrders());
  }, []);

  return (
    <TemplateHome>
      <BoxInlineList data={orders} />
    </TemplateHome>
  );
}
