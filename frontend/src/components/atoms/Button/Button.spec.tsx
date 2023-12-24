import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("Button renders correctly", () => {
    const { getByText } = render(<Button>Entrar</Button>);

    expect(getByText("Entrar")).toBeInTheDocument();
  });
});
