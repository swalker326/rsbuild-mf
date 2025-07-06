import { createModuleFederationConfig } from "@module-federation/enhanced";

export const mfConfig = createModuleFederationConfig({
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3001/mf-manifest.json",
  },
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