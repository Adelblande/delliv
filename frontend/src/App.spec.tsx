import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";
import store from "./store";
import * as reactRedux from "react-redux";

const useSelector = jest.spyOn(reactRedux, "useSelector");

jest.mock("react-redux", () => {
  return {
    useDispatch: jest.fn().mockImplementation(() => store.dispatch),
    useSelector: jest.fn().mockImplementation(() => ({
      id: "",
      name: "",
      email: "",
      isAuthenticated: false,
    })),
  };
});

describe("App", () => {
  it("Must be possible to authenticade", async () => {
    const { rerender } = render(<App />);

    const inputEmail = screen.getByPlaceholderText("E-mail");
    const inputPassword = screen.getByPlaceholderText("Senha");
    const enterButton = screen.getByText("Entrar");

    userEvent.type(inputEmail, "delliv@delliv.com");
    userEvent.type(inputPassword, "Delliv1234");
    userEvent.click(enterButton);

    useSelector.mockReturnValue({
      id: "123456",
      name: "Delliv",
      email: "delliv@delliv.com",
      isAuthenticated: true,
    });

    rerender(<App />);

    expect(screen.getByText("Pedidos")).toBeInTheDocument();
  });
});
