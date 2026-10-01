export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "films", label: "Фильмы", href: "/#films" },
  { id: "series", label: "Сериалы", href: "/#series" },
  { id: "collections", label: "Подборки", href: "/#collections" },
];
