import { render, screen, fireEvent } from "@testing-library/react";

import { Home } from ".";
import store from "../../store";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";

const useSelector = jest.spyOn(reactRedux, "useSelector");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn().mockImplementation(() => store.dispatch),
  useSelector: jest.fn().mockImplementation(() => ({
    orders: [
      {
        id: "123",
        name: "Delliv",
        address: "Rua da Delliv 372",
        status: "Pendente",
      },
    ],
  })),
}));

describe("Home Page", () => {
  it("Home page should be renders correctly", async () => {
    render(<Home />);
    expect(screen.getByText("Pedidos")).toBeInTheDocument();
    expect(screen.getByText("Delliv")).toBeInTheDocument();
  });

  it("Must be possible alter status of a order", async () => {
    render(<Home />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Processando" },
    });
    expect(
      screen.getByRole("option", { name: "Processando" })
    ).toBeInTheDocument();
  });

  it("Must be possible include a new order", async () => {
    const { rerender } = render(<Home />);

    const inputName = screen.getByPlaceholderText("Nome");
    const inputAddress = screen.getByPlaceholderText("Endereço");
    const registerButton = screen.getByText("Cadastrar");

    userEvent.type(inputName, "Teste");
    userEvent.type(inputAddress, "Rua do Teste 123");
    userEvent.click(registerButton);
    useSelector.mockReturnValue({
      orders: [
        {
          id: "123",
          name: "Delliv",
          address: "Rua da Delliv 372",
          status: "Pendente",
        },
        {
          id: "321",
          name: "Teste",
          address: "Rua do Teste 123",
          status: "Pendente",
        },
      ],
    });

    rerender(<Home />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});
