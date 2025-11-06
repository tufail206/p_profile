import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
    config.optimization.realContentHash = false;
    return config;
  },
};

export default nextConfig;
