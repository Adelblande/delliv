import { useAppDispatch } from "../../../store";
import { asyncSetStatus } from "../../../store/ordersSlice";
import { Box, Input, CustomSelect } from "../../atoms";
import { Container } from "./styles";

interface Order {
  id: string;
  name: string;
  address: string;
  status: string;
}

interface BoxInlineProps {
  data: Order;
}

interface Option {
  label: string;
  value: string;
}

const optionsStatus: Option[] = [
  { label: "Pendente", value: "Pendente" },
  { label: "Processando", value: "Processando" },
  { label: "Finalizado", value: "Finalizado" },
];

export function BoxInline({ data }: BoxInlineProps) {
  const dispatch = useAppDispatch();

  const handleChange = (id: string, value: string) => {
    dispatch(asyncSetStatus(id, value));
  };

  return (
    <Container key={`line-${data.id}`}>
      <Box width={300} height={50}>
        <Input type="text" disabled value={data.name} />
      </Box>
      <Box width={600} height={50}>
        <Input type="text" disabled value={data.address} />
      </Box>
      <Box width={300} height={50}>
        <CustomSelect
          value={
            optionsStatus.find((item) => item.value === data.status) ||
            optionsStatus[0]
          }
          name={`select-${data.id}`}
          dataOptions={optionsStatus}
          key={`select-${data.id}`}
          handleChange={(e) => handleChange(data.id, e!.value)}
        />
      </Box>
    </Container>
  );
}
