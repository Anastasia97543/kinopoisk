import { afterEach, describe, expect, it, vi } from "vitest";
import { isFavorite, readFavoriteIds, toggleFavorite } from "./favorites";

function installStorage() {
  const jar = new Map<string, string>();

  vi.stubGlobal("localStorage", {
    getItem: (key: string) => jar.get(key) ?? null,
    setItem: (key: string, value: string) => {
      jar.set(key, value);
    },
  });

  return jar;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("favorites", () => {
  it("starts empty", () => {
    installStorage();

    expect(readFavoriteIds()).toEqual([]);
    expect(isFavorite(603)).toBe(false);
  });

  it("adds an id on the first toggle and removes it on the second", () => {
    installStorage();

    expect(toggleFavorite(603)).toBe(true);
    expect(isFavorite(603)).toBe(true);
    expect(readFavoriteIds()).toEqual([603]);

    expect(toggleFavorite(603)).toBe(false);
    expect(isFavorite(603)).toBe(false);
    expect(readFavoriteIds()).toEqual([]);
  });

  it("keeps other ids when one is removed", () => {
    installStorage();

    toggleFavorite(11);
    toggleFavorite(22);
    toggleFavorite(11);

    expect(readFavoriteIds()).toEqual([22]);
  });

  it("ignores a broken or unexpected value", () => {
    const jar = installStorage();
    jar.set("kinodom.favorites", "{not json");

    expect(readFavoriteIds()).toEqual([]);

    jar.set("kinodom.favorites", JSON.stringify(["603", 1.5, 12]));

    expect(readFavoriteIds()).toEqual([12]);
  });

  it("keeps the previous state when storage rejects the write", () => {
    installStorage();
    toggleFavorite(603);

    vi.stubGlobal("localStorage", {
      getItem: () => JSON.stringify([603]),
      setItem: () => {
        throw new Error("quota");
      },
    });

    expect(toggleFavorite(603)).toBe(true);
    expect(isFavorite(603)).toBe(true);
  });
});
