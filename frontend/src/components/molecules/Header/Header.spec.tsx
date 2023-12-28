import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("react-redux");

describe("Header", () => {
  it("Header renders correctly", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
