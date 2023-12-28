import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("Button renders correctly", () => {
    render(<Button>Entrar</Button>);

    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });
});
