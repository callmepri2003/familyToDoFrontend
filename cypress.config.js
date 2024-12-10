import { defineConfig } from "cypress";
import dotenv from "dotenv";

// Load environment variables from a `.env` file if it exists
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, // Fallback to a default URL if not defined
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
