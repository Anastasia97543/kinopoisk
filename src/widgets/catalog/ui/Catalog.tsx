import { useEffect, useState } from "react";
import { CATALOG } from "@/shared/api/mock";
import { requests, type MoviePopularList200ResultsItem } from "@/shared/api";
import { getTmdbImage } from "@/shared/lib/getTmdbImage";
import { formatRating } from "@/shared/lib/format";
import { Button } from "@/shared/ui/atoms/Button";
import type { CatalogRowData, Movie } from "../model";
import { CatalogRow } from "./CatalogRow";
import styles from "./Catalog.module.css";

function mapMovies(results: MoviePopularList200ResultsItem[] = []): Movie[] {
  return results
    .filter((movie) => movie.poster_path)
    .map((movie) => ({
      id: String(movie.id),
      title: movie.title ?? "",
      rating: formatRating(movie.vote_average),
      kind: "Фильм",
      genres: movie.release_date?.slice(0, 4) ?? "",
      poster: getTmdbImage(movie.poster_path),
    }));
}

export function Catalog() {
  const [rows, setRows] = useState<CatalogRowData[]>(CATALOG);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      requests.moviePopularList(),
      requests.movieNowPlayingList(),
      requests.movieTopRatedList(),
    ])
      .then(([popular, nowPlaying, topRated]) => {
        if (cancelled) return;
        setRows([
          { id: "popular", title: "Популярное", items: mapMovies(popular.data.results) },
          { id: "now-playing", title: "Сейчас смотрят", items: mapMovies(nowPlaying.data.results) },
          { id: "top-rated", title: "Лучшие по рейтингу", items: mapMovies(topRated.data.results) },
        ]);
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
