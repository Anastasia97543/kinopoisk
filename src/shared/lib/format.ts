export function formatRating(value?: number) {
  return Number((value ?? 0).toFixed(1));
}

export function formatRuDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
}
