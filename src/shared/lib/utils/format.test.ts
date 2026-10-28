import { describe, expect, it } from "vitest";
import { formatDuration, formatRating, formatRuDate, formatYear } from "./format";

describe("formatRating", () => {
  it("rounds to one decimal", () => {
    expect(formatRating(8.333)).toBe(8.3);
  });

  it("treats a missing value as zero", () => {
    expect(formatRating()).toBe(0);
  });
});

describe("formatDuration", () => {
  it("splits minutes into hours and minutes", () => {
    expect(formatDuration(136)).toBe("2 ч 16 мин");
  });

  it("returns an empty string when there is no duration", () => {
    expect(formatDuration()).toBe("");
    expect(formatDuration(0)).toBe("");
  });
});

describe("formatYear", () => {
  it("takes the year from an ISO date", () => {
    expect(formatYear("1999-03-31")).toBe("1999");
  });

  it("returns an empty string for a missing or invalid date", () => {
    expect(formatYear()).toBe("");
    expect(formatYear("not-a-date")).toBe("");
  });
});

describe("formatRuDate", () => {
  it("returns an empty string without a date", () => {
    expect(formatRuDate()).toBe("");
  });

  it("formats day and month in Russian", () => {
    expect(formatRuDate("2013-03-15T12:00:00.000Z")).toBe("15 марта");
  });
});
