import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

import babelConfig from "./babel.config";

export default defineConfig(() => {
  const PORT = 3044;

  return {
    plugins: [
      react({ babel: babelConfig }),
      tsconfigPaths(),
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: "eslint './src/**/*.{ts,tsx}'",
          dev: { logLevel: ["error"] },
        },
      }),
    ],
    server: { port: PORT, host: true },
  };
});
