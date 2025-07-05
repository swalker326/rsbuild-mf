import { RsbuildPlugin } from "@rsbuild/core";
import { withZephyr } from "zephyr-rspack-plugin";

export const pluginRsbuildZephyr = (): RsbuildPlugin => ({
  name: "plugin-rsbuild-zephyr",
  setup(api) {
    console.log("plugin-rsbuild-zephyr setup");

    api.modifyRspackConfig(async (config, { mergeConfig }) => {
      //@ts-expect-error
      const zeConfig = await withZephyr()(config);
      //@ts-expect-error
      mergeConfig(zeConfig);
    });
  }
});
