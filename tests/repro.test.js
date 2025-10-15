import test, { expect } from "playwright/test";

test("fetch", async ({ page }) => {
  const logs = [];
  page.on("console", (msg) => logs.push(msg.text()));

  await page.goto("/");

  await page.getByRole("button", { name: "Fetch!" }).click();

  await expect(page.getByText(/Failed to fetch/)).toBeInViewport();
  expect(logs).toEqual([
    '{"method":"get","mode":"no-cors"}',
    "Access to fetch at 'http://localhost:8000/' from origin 'https://lna-testing.notyetsecure.com' has been blocked by CORS policy: Permission was denied for this request to access the `unknown` address space.",
    "Failed to load resource: net::ERR_FAILED",
  ]);
});
