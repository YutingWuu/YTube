export const REPO_NAME = "YTube";
export const BASE_PATH = `/${REPO_NAME}`;

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return `${BASE_PATH}/${path}`;
  }

  return `${BASE_PATH}${path}`;
}
