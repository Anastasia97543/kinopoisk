import { describe, expect, it } from "vitest";
import { getTmdbImage } from "./getTmdbImage";

describe("getTmdbImage", () => {
  it("builds a TMDB url with the default size", () => {
    expect(getTmdbImage("/poster.jpg")).toBe("https://image.tmdb.org/t/p/w500/poster.jpg");
  });

  it("uses the given size", () => {
    expect(getTmdbImage("/poster.jpg", "w92")).toBe("https://image.tmdb.org/t/p/w92/poster.jpg");
  });

  it("returns an empty string without a path", () => {
    expect(getTmdbImage()).toBe("");
    expect(getTmdbImage(null)).toBe("");
  });
});
