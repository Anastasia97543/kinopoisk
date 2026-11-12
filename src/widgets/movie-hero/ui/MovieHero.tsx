import { useEffect, useState } from "react";
import clsx from "clsx";
import heartSvg from "@/assets/icons/heart.svg?raw";
import { isFavorite, toggleFavorite } from "@/shared/lib";
import { Button } from "@/shared/ui/atoms/Button";
import type { MovieHeroData } from "../model";
import styles from "./MovieHero.module.css";

type MovieHeroProps = {
  movie: MovieHeroData;
};

export function MovieHero({ movie }: MovieHeroProps) {
  const [liked, setLiked] = useState(() => isFavorite(movie.id));
  const meta = [movie.year, movie.genres].filter(Boolean).join(", ");

  useEffect(() => {
    const sync = () => setLiked(isFavorite(movie.id));
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [movie.id]);

  return (
    <section
      className={styles.hero}
      style={movie.backdrop ? { backgroundImage: `url(${movie.backdrop})` } : undefined}
      aria-labelledby="movie-title"
    >
      <div className={clsx("container", styles.inner)}>
        <h1 id="movie-title" className={styles.title}>
          {movie.title}
        </h1>

        <p className={styles.info}>
          {movie.rating ? <span className={styles.rating}>{movie.rating}</span> : null}
          {meta ? <span>• {meta}</span> : null}
          {movie.countries ? <span>• {movie.countries}</span> : null}
          {movie.duration ? <span>• {movie.duration}</span> : null}
        </p>

        <div className={styles.actions}>
          <Button color="accent" className={styles.watch} type="button">
            Смотреть фильм
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <path d="M12 7 0 14V0l12 7Z" />
            </svg>
          </Button>
          <Button color="ghost" type="button">
            Трейлер
          </Button>
          <button type="button" className={styles.tool} aria-label="Добавить в список">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M6 2.75h7.1L17.25 6.9V19.25H6V2.75Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M12.9 2.75V7.1h4.35"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M11 10.75v5.5M8.25 13.5h5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={clsx(styles.tool, liked && styles.liked)}
            aria-label={liked ? "Убрать из избранного" : "Добавить в избранное"}
            aria-pressed={liked}
            onClick={() => setLiked(toggleFavorite(movie.id))}
          >
            <span
              className={styles.heart}
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: heartSvg }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
