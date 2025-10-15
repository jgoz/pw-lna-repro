import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://lna-testing.notyetsecure.com/",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
