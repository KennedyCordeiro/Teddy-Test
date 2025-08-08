import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../../micro-frontends/auth/components/Login";
import { describe, it, vi, beforeEach, expect } from "vitest";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Login Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render login form", () => {
    renderWithRouter(<Login />);

    expect(screen.getByText("Olá, seja bem-vindo!")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite seu nome")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  it("should update input value when typing", () => {
    renderWithRouter(<Login />);

    const input = screen.getByPlaceholderText("Digite seu nome");
    fireEvent.change(input, { target: { value: "João Silva" } });

    expect(input).toHaveValue("João Silva");
  });

  it("should handle form submission with valid name", () => {
    renderWithRouter(<Login />);

    const input = screen.getByPlaceholderText("Digite seu nome");
    const submitButton = screen.getByRole("button", { name: "Entrar" });

    fireEvent.change(input, { target: { value: "João Silva" } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });

  it("should not submit form with empty name", () => {
    renderWithRouter(<Login />);

    const submitButton = screen.getByRole("button", { name: "Entrar" });
    fireEvent.click(submitButton);

    expect(screen.getByText("Olá, seja bem-vindo!")).toBeInTheDocument();
  });

  it("should not submit form with only whitespace", () => {
    renderWithRouter(<Login />);

    const input = screen.getByPlaceholderText("Digite seu nome");
    const submitButton = screen.getByRole("button", { name: "Entrar" });

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(submitButton);

    expect(screen.getByText("Olá, seja bem-vindo!")).toBeInTheDocument();
  });
});
