import { useSelector } from "react-redux";
import { SetStateAction, useEffect, useState } from "react";
import { asyncFetchOrders, asyncAdd } from "../../store/ordersSlice";
import { RootState, useAppDispatch } from "../../store";
import { TemplateHome } from "../../components/templates";
import { BoxInlineList } from "../../components/organisms";
import { Button, Input } from "../../components/atoms";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(name: string, address: string) {
    dispatch(asyncAdd(name, address));
    setName("");
    setAddress("");
  }

  useEffect(() => {
    dispatch(asyncFetchOrders());
  }, []);

  return (
    <TemplateHome>
      <form
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Input
          value={name}
          type="text"
          placeholder="Nome"
          onChange={(value: { target: { value: SetStateAction<string> } }) =>
            setName(value.target.value)
          }
        />
        <Input
          value={address}
          type="text"
          placeholder="Endereço"
          onChange={(value: { target: { value: SetStateAction<string> } }) =>
            setAddress(value.target.value)
          }
        />
        <Button
          type="button"
          disabled={!name && !address}
          onClick={() => handleSubmit(name, address)}
          style={{ width: 200 }}
        >
          Cadastrar
        </Button>
      </form>
      <BoxInlineList data={orders} />
    </TemplateHome>
  );
}
