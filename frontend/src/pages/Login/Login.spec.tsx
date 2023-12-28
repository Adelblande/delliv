import { render, screen } from "@testing-library/react";

import { Login } from ".";
import store from "../../store";

jest.mock("react-redux", () => {
  return {
    useDispatch: jest.fn().mockImplementationOnce(() => store.dispatch),
    useSelector: jest.fn().mockImplementationOnce(() => ({
      user: {
        id: "",
        name: "",
        email: "",
        isAuthenticated: false,
      },
    })),
  };
});

describe("Login Page", () => {
  it("Login page should be renders correctly", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("E-mail")).toBeVisible();
    expect(screen.getByPlaceholderText("Senha")).toBeVisible();
    expect(screen.getByText("Entrar")).toBeVisible();
  });
});
