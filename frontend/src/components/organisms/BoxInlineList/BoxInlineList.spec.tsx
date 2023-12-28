import { render, screen } from "@testing-library/react";
import { BoxInlineList } from ".";

jest.mock("react-redux");

describe("BoxInlineList", () => {
  it("BoxInlineList renders correctly", () => {
    render(
      <BoxInlineList
        data={[
          {
            id: "12345",
            name: "Adel",
            address: "Av. Paulista 1500",
            status: "Pendente",
          },
        ]}
      />
    );

    expect(screen.getByText("Adel")).toBeVisible();
    expect(screen.getByText("Av. Paulista 1500")).toBeVisible();
  });
});
