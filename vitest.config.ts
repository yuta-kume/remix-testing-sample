import * as path from "path";
import * as VitestConfig from "vitest/config";

export default VitestConfig.defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
});
