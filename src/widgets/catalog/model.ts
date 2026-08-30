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
