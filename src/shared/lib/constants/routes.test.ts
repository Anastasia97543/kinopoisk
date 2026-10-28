import { describe, expect, it } from "vitest";
import { moviePath } from "./routes";

describe("moviePath", () => {
  it("builds a movie page url", () => {
    expect(moviePath(603)).toBe("/movies/603");
    expect(moviePath("603")).toBe("/movies/603");
  });
});
