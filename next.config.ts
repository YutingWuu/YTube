import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "YTube";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubActions ? `/${repoName}` : "",
  assetPrefix: isGitHubActions ? `/${repoName}/` : "",
};

export default nextConfig;
