import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("Button renders correctly", async () => {
    const { debug } = render(<Button>Entrar</Button>);
    debug();
    // expect(2 + 2).toBe(4);
  });
});
