/// <reference types="vitest" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["__tests__/**"],
    environment: "jsdom", // Ensure jsdom is used for browser-like testing
  },
})
