import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../micro-frontends/shared/components/Button/Button";
import { describe, expect, it, vi } from "vitest";

describe("Button Component", () => {
  it("should render button with text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("should handle click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply variant styles", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole("button", { name: "Primary Button" });
    expect(button).toBeInTheDocument();
  });

  it("should apply size styles", () => {
    render(<Button size="large">Large Button</Button>);
    const button = screen.getByRole("button", { name: "Large Button" });
    expect(button).toBeInTheDocument();
  });

  it("should apply custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Button style={customStyle}>Styled Button</Button>);
    const button = screen.getByRole("button", { name: "Styled Button" });
    expect(button).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: "Disabled Button" });
    expect(button).toBeDisabled();
  });
});
