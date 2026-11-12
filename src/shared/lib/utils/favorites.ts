const FAVORITES_KEY = "kinodom.favorites";

export function readFavoriteIds(): number[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((id): id is number => Number.isInteger(id));
  } catch {
    return [];
  }
}

export function isFavorite(id: number): boolean {
  return readFavoriteIds().includes(id);
}

export function toggleFavorite(id: number): boolean {
  const ids = readFavoriteIds();
  const liked = ids.includes(id);
  const next = liked ? ids.filter((item) => item !== id) : [...ids, id];

  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  } catch {
    return liked;
  }

  return !liked;
}
