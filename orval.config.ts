import { defineConfig } from "orval";

export default defineConfig({
  tmdb: {
    input: {
      target: "./src/shared/api/schema.json",
    },
    output: {
      client: "axios",
      target: "./src/shared/api/generated/endpoints.ts",
      schemas: "./src/shared/api/generated/model",
      prettier: true,
    },
  },
});
