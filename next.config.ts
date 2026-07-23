import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_NAME = "YTube";
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
