import { render, screen } from "@testing-library/react";
import { BoxInline } from ".";

jest.mock("react-redux");

describe("BoxInline", () => {
  it("BoxInline renders correctly", () => {
    render(
      <BoxInline
        data={{
          id: "12345",
          name: "Adel",
          address: "Av. Paulista 1500",
          status: "Pendente",
        }}
      />
    );

    expect(screen.getByText("Adel")).toBeVisible();
    expect(screen.getByText("Av. Paulista 1500")).toBeVisible();
  });
});
