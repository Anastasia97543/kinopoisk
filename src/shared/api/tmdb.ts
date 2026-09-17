import { api } from "./instance";

export const BREAK_TMDB = true;

const IMAGE_BASE = "https://image.tmdb.org/t/p";
const BROKEN_MOVIES_PATH = "/3/movie/does-not-exist";
const BROKEN_PEOPLE_PATH = "/3/person/does-not-exist";

export function tmdbImage(path: string | null | undefined, size = "w500") {
  return path ? `${IMAGE_BASE}/${size}${path}` : "";
}

export type TmdbMovie = {
  id: number;
  title: string;
  overview?: string;
  vote_average?: number;
  poster_path: string | null;
  release_date?: string;
};

type TmdbPerson = {
  profile_path: string | null;
};

let peoplePhotosPromise: Promise<string[]> | null = null;

export function fetchPersonPhotos() {
  const path = BREAK_TMDB ? BROKEN_PEOPLE_PATH : "/3/person/popular";
  const request = () =>
    api
      .get<{ results: TmdbPerson[] }>(path)
      .then(({ data }) =>
        (data.results ?? [])
          .filter((person) => person.profile_path)
          .map((person) => tmdbImage(person.profile_path, "w185")),
      );

  if (BREAK_TMDB) return request();

  if (!peoplePhotosPromise) {
    peoplePhotosPromise = request();
  }

  return peoplePhotosPromise;
}

export async function fetchMovies(path: string) {
  const { data } = await api.get<{ results: TmdbMovie[] }>(BREAK_TMDB ? BROKEN_MOVIES_PATH : path);
  return data.results ?? [];
}
