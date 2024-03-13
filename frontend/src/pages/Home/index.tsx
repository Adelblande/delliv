import { SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/atoms";
import { BoxInlineList } from "../../components/organisms";
import { TemplateHome } from "../../components/templates";
import { RootState, useAppDispatch } from "../../store";
import { asyncAdd, asyncFetchOrders } from "../../store/ordersSlice";

export function Home() {
  const dispatch = useAppDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);
  const accessToken = localStorage.getItem("@delliv:accessToken");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

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

  useEffect(() => {
    console.log(isAuthenticated, accessToken);
    if (!isAuthenticated && !accessToken) {
      return navigate("/login");
    }
  }, [isAuthenticated, accessToken]);

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
