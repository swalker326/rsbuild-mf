import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";
import { pluginRsbuildZephyr } from "plugin-rsbuild-zephyr";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: { port: 3001 },
  output: {
    assetPrefix: "auto"
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation(mfConfig, {}),
    pluginRsbuildZephyr()
  ]
});
