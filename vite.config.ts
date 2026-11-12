/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "analyze") {
    const { analyzer } = await import("vite-bundle-analyzer");
    plugins.push(
      analyzer({
        analyzerMode: "static",
        openAnalyzer: true,
      }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      watch: {
        ignored: ["**/src/assets/**"],
        usePolling: true,
      },
    },
    test: {
      projects: [
        {
          extends: true,
          test: {
            name: "unit",
            environment: "node",
            include: ["src/**/*.test.ts"],
          },
        },
        {
          extends: true,
          plugins: await storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({}),
              instances: [{ browser: "chromium" as const }],
            },
          },
        },
      ],
    },
  };
});
