import { OrderProps } from "../../../store/ordersSlice";
import { BoxInline } from "../../molecules";
import { Container } from "./styles";

interface BoxInlineListProps {
  data: OrderProps[];
}

export function BoxInlineList({ data }: BoxInlineListProps) {
  return (
    <Container>
      {data?.map((order) => (
        <BoxInline key={order.id} data={order} />
      ))}
    </Container>
  );
}
