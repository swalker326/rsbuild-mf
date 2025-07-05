import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
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
  plugins: [pluginReact(), pluginRsbuildZephyr()],
  tools: {
    rspack: {
      plugins: [new ModuleFederationPlugin(mfConfig)]
    }
  }
});
