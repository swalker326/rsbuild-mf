import { createModuleFederationConfig } from "@module-federation/enhanced";

export const mfConfig = createModuleFederationConfig({
  name: "remote",
  exposes: {
    "./Module": "./src/App.tsx",
  },
  filename: "remoteEntry.js",
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
    },
  },
})