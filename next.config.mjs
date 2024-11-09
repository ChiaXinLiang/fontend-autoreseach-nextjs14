import createJiti from "jiti";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  webpack: (config) => {
    const path = fileURLToPath(new URL(".", import.meta.url));
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(path, "./src"),
      "@components": resolve(path, "./src/components"),
      "@lib": resolve(path, "./src/lib"),
    };
    return config;
  },
};

export default nextConfig;
