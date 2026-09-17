import { api } from "./instance";

const IMAGE_BASE = "https://image.tmdb.org/t/p";

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
  if (!peoplePhotosPromise) {
    peoplePhotosPromise = api
      .get<{ results: TmdbPerson[] }>("/3/person/popular")
      .then(({ data }) =>
        (data.results ?? [])
          .filter((person) => person.profile_path)
          .map((person) => tmdbImage(person.profile_path, "w185")),
      );
  }

  return peoplePhotosPromise;
}

export async function fetchMovies(path: string) {
  const { data } = await api.get<{ results: TmdbMovie[] }>(path);
  return data.results ?? [];
}
