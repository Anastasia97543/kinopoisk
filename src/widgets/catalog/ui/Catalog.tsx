import { useEffect, useState } from "react";
import { CATALOG } from "@/shared/api/mock";
import {
  DiscoverMovieSortBy,
  requests,
  type DiscoverMovie200ResultsItem,
  type GenreMovieList200GenresItem,
} from "@/shared/api";
import { formatRating, getTmdbImage } from "@/shared/lib";
import { Button } from "@/shared/ui/atoms/Button";
import type { CatalogRowData, Movie } from "../model";
import { CatalogRow } from "./CatalogRow";
import styles from "./Catalog.module.css";

const CATALOG_GENRE_IDS = [35, 18, 14, 53, 9648];

function mapMovies(
  results: DiscoverMovie200ResultsItem[] = [],
  namesById: Map<number, string>,
): Movie[] {
  return results
    .filter((movie) => movie.poster_path)
    .map((movie) => ({
      id: String(movie.id),
      title: movie.title ?? "",
      rating: formatRating(movie.vote_average),
      kind: "Фильм",
      genres: (movie.genre_ids ?? [])
        .map((genreId) => namesById.get(genreId))
        .filter(Boolean)
        .join(", "),
      poster: getTmdbImage(movie.poster_path),
    }));
}

export function Catalog() {
  const [rows, setRows] = useState<CatalogRowData[]>(CATALOG);

  useEffect(() => {
    let cancelled = false;

    requests
      .genreMovieList()
      .then(({ data }) => {
        const genres = data.genres ?? [];
        const namesById = new Map(
          genres.flatMap((genre) =>
            genre.id != null && genre.name ? [[genre.id, genre.name] as const] : [],
          ),
        );
        const selected = CATALOG_GENRE_IDS.map((id) =>
          genres.find((genre) => genre.id === id),
        ).filter((genre): genre is GenreMovieList200GenresItem => genre?.id != null);

        if (selected.length === 0) throw new Error("genres");

        return Promise.all(
          selected.map((genre) =>
            requests
              .discoverMovie({
                with_genres: String(genre.id),
                sort_by: DiscoverMovieSortBy.popularitydesc,
              })
              .then(({ data: movies }) => ({
                id: String(genre.id),
                title: genre.name ?? "",
                items: mapMovies(movies.results, namesById),
              })),
          ),
        );
      })
      .then((nextRows) => {
        if (!cancelled) setRows(nextRows);
      })
      .catch(() => {
        if (!cancelled) setRows(CATALOG);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section} id="films" aria-labelledby="catalog-title">
      <div className="container">
        <h2 id="catalog-title" className={styles.title}>
          Каталог фильмов и сериалов
        </h2>

        {rows.map((row) => (
          <CatalogRow key={row.id} title={row.title} items={row.items} />
        ))}

        <div className={styles.footer}>
          <Button color="ghost" type="button">
            Посмотреть всё
          </Button>
        </div>
      </div>
    </section>
  );
}
