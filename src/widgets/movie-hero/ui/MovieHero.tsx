import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/shared/ui/atoms/Button";
import type { MovieHeroData } from "../model";
import styles from "./MovieHero.module.css";

type MovieHeroProps = {
  movie: MovieHeroData;
};

export function MovieHero({ movie }: MovieHeroProps) {
  const [liked, setLiked] = useState(false);
  const meta = [movie.year, movie.genres].filter(Boolean).join(", ");

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
          <button
            type="button"
            className={clsx(styles.like, liked && styles.liked)}
            aria-label={liked ? "Убрать из избранного" : "Добавить в избранное"}
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
          >
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true">
              <path
                d="M11 18.35 9.55 17.03C4.4 12.36 1 9.27 1 5.5 1 2.42 3.42 0 6.5 0 8.24 0 9.91.81 11 2.09 12.09.81 13.76 0 15.5 0 18.58 0 21 2.42 21 5.5c0 3.77-3.4 6.86-8.55 11.54L11 18.35Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
