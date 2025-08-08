import { test, expect } from "@playwright/test";

test.describe("Login Flow", () => {
  test("should display login page", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Olá, seja bem-vindo!")).toBeVisible();
    await expect(page.getByPlaceholder("Digite seu nome")).toBeVisible();
    await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
  });

  test("should login successfully and redirect to clients page", async ({
    page,
  }) => {
    await page.goto("/");

    const nameInput = page.getByPlaceholder("Digite seu nome");
    const submitButton = page.getByRole("button", { name: "Entrar" });

    await nameInput.fill("João Silva");
    await submitButton.click();

    // Should redirect to clients page
    await expect(page).toHaveURL("/clients");

    // Should show navbar with user name
    await expect(page.getByText("João Silva")).toBeVisible();
  });

  test("should not submit with empty name", async ({ page }) => {
    await page.goto("/");

    const submitButton = page.getByRole("button", { name: "Entrar" });
    await submitButton.click();

    // Should stay on login page
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Olá, seja bem-vindo!")).toBeVisible();
  });

  test("should not submit with only whitespace", async ({ page }) => {
    await page.goto("/");

    const nameInput = page.getByPlaceholder("Digite seu nome");
    const submitButton = page.getByRole("button", { name: "Entrar" });

    await nameInput.fill("   ");
    await submitButton.click();

    // Should stay on login page
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Olá, seja bem-vindo!")).toBeVisible();
  });
});
