import { useEffect, useState } from "react";
import { DiscoverMovieSortBy, requests, type DiscoverMovie200ResultsItem } from "@/shared/api";
import { formatRating, getTmdbImage } from "@/shared/lib";
import { Button } from "@/shared/ui/atoms/Button";
import type { CatalogRowData, Movie } from "../model";
import { CatalogRow } from "./CatalogRow";
import styles from "./Catalog.module.css";

const COMEDY_GENRE = 35;
const DRAMA_GENRE = 18;
const FANTASY_GENRE = 14;
const THRILLER_GENRE = 53;
const DETECTIVE_GENRE = 9648;
const CATALOG_GENRE_IDS = [
  COMEDY_GENRE,
  DRAMA_GENRE,
  FANTASY_GENRE,
  THRILLER_GENRE,
  DETECTIVE_GENRE,
];

function mapMovies(
  results: DiscoverMovie200ResultsItem[] = [],
  namesById: Map<number, string>,
): Movie[] {
  return results
    .filter((movie) => movie.id)
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
  const [rows, setRows] = useState<CatalogRowData[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    requests
      .genreMovieList()
      .then(({ data }) => {
        const genres = data.genres ?? [];
        const namesById = new Map<number, string>();

        for (const genre of genres) {
          if (genre.id != null && genre.name) {
            namesById.set(genre.id, genre.name);
          }
        }

        const selected: typeof genres = [];

        for (const id of CATALOG_GENRE_IDS) {
          const genre = genres.find((item) => item.id === id);
          if (genre?.id != null) selected.push(genre);
        }

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
        if (!cancelled) {
          setFailed(false);
          setRows(nextRows);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true);
          setRows([]);
        }
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

        {failed ? <p className={styles.empty}>Не удалось загрузить каталог</p> : null}

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
