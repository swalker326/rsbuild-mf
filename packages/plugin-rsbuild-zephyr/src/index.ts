import { RsbuildPlugin } from "@rsbuild/core";
import { withZephyr } from "zephyr-rspack-plugin";

export const pluginRsbuildZephyr = (): RsbuildPlugin => ({
  name: "plugin-rsbuild-zephyr",
  setup(api) {
    console.log("plugin-rsbuild-zephyr setup");

    api.onBeforeCreateCompiler(async ({ bundlerConfigs }) => {
      if (!bundlerConfigs.length) {
        console.warn("No bundler configs found, skipping Zephyr plugin setup.");
        return;
      }
      //@ts-expect-error
      const zeConfig = await withZephyr()(bundlerConfigs[0]);
      if (!zeConfig.plugins || !Array.isArray(zeConfig.plugins)) {
        console.warn("No Zephyr plugins found in the configuration.");
        return;
      }
      const zePlugin = zeConfig.plugins.find((plugin) => {
        // //@ts-expect-error
        console.log("Checking plugin:", plugin);
        //@ts-expect-error
        if (plugin && plugin._options && plugin._options.name) {
          //@ts-expect-error
          console.log("Found plugin with name:", plugin._options.name);
          //@ts-expect-error
          return plugin._options.name === "ZeRspackPlugin";
        }
        return false;
      });
      if (!zePlugin) {
        console.warn("ZeRspackPlugin not found in Zephyr configuration.");
        return;
      }
      bundlerConfigs[0].plugins?.push(zePlugin);
    });
  }
});
