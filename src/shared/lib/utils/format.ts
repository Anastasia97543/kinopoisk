export function formatRating(value?: number) {
  return Number((value ?? 0).toFixed(1));
}

export function formatRuDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
}

export function formatDuration(minutesTotal?: number) {
  if (!minutesTotal) return "";
  const hours = Math.trunc(minutesTotal / 60);
  const minutes = minutesTotal % 60;
  return `${hours} ч ${minutes} мин`;
}

export function formatYear(iso?: string) {
  if (!iso) return "";
  const year = new Date(iso).getFullYear();
  return Number.isNaN(year) ? "" : String(year);
}
