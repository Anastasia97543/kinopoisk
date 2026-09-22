const IMAGE_BASE = "https://image.tmdb.org/t/p";

export function getTmdbImage(path: string | null | undefined, size = "w500") {
  return path ? `${IMAGE_BASE}/${size}${path}` : "";
}
