export const ROUTES = {
  HOME: "/",
  MOVIE: "/movies/:id",
};

export function moviePath(id: string | number) {
  return `/movies/${id}`;
}
