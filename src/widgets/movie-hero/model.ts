import fallbackBackdrop from "@/assets/cards/first-card.png";

export type MovieHeroData = {
  title: string;
  overview: string;
  backdrop: string;
  rating: string;
  year: string;
  genres: string;
  countries: string;
  duration: string;
};

export const FALLBACK_MOVIE: MovieHeroData = {
  title: "Начало",
  overview:
    "Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим.",
  backdrop: fallbackBackdrop,
  rating: "8.4",
  year: "2010",
  genres: "фантастика, боевик, триллер",
  countries: "США, Великобритания",
  duration: "2 ч 28 мин",
};
