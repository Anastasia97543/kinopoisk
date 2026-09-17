import { useEffect, useState } from "react";
import { CATALOG } from "@/shared/api/mock";
import { fetchMovies, tmdbImage, type TmdbMovie } from "@/shared/api";
import { Button } from "@/shared/ui/atoms/Button";
import type { CatalogRowData, Movie } from "../model";
import { CatalogRow } from "./CatalogRow";
import styles from "./Catalog.module.css";

function mapMovies(results: TmdbMovie[] = []): Movie[] {
  return results
    .filter((movie) => movie.poster_path)
    .map((movie) => ({
      id: String(movie.id),
      title: movie.title,
      rating: Number((movie.vote_average ?? 0).toFixed(1)),
      kind: "Фильм",
      genres: movie.release_date?.slice(0, 4) ?? "",
      poster: tmdbImage(movie.poster_path),
    }));
}

export function Catalog() {
  const [rows, setRows] = useState<CatalogRowData[]>(CATALOG);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [popular, nowPlaying, topRated] = await Promise.all([
          fetchMovies("/3/movie/popular"),
          fetchMovies("/3/movie/now_playing"),
          fetchMovies("/3/movie/top_rated"),
        ]);

        if (cancelled) return;

        setRows([
          { id: "popular", title: "Популярное", items: mapMovies(popular) },
          { id: "now-playing", title: "Сейчас смотрят", items: mapMovies(nowPlaying) },
          { id: "top-rated", title: "Лучшие по рейтингу", items: mapMovies(topRated) },
        ]);
      } catch {
        if (!cancelled) setRows(CATALOG);
      }
    }

    void load();

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
