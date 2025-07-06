import { createModuleFederationConfig } from "@module-federation/enhanced";

export const mfConfig = createModuleFederationConfig({
  filename: "remoteEntry.js",
  name: "remote",
  exposes: {
    "./Remote": "./src/App"
  },
  dts: false,
  shared: ["react", "react-dom"]
});
