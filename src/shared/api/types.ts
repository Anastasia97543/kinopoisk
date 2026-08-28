export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type BadgeType = "premiere" | "soon";

export type Premiere = {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeType: BadgeType;
  date: string;
  poster: string;
};

export type Advantage = {
  id: string;
  title: string;
  text: string;
  icon: string;
};

export type Movie = {
  id: string;
  title: string;
  rating: number;
  kind: string;
  genres: string;
  poster: string;
};

export type CatalogRowData = {
  id: string;
  title: string;
  items: Movie[];
};

export type Collection = {
  id: string;
  title: string;
  image: string;
};
