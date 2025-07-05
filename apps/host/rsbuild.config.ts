import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";
import { pluginRsbuildZephyr } from "plugin-rsbuild-zephyr";

export default defineConfig({
  server: {
    port: 3000
  },
  html: {
    title: "Host App"
  },
  plugins: [
    pluginReact({ splitChunks: { react: false } }),
    pluginModuleFederation(mfConfig, {}),
    pluginRsbuildZephyr()
  ]
});
