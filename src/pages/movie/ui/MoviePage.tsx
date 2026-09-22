import { useEffect, useState } from "react";
import { requests, type MovieDetails200 } from "@/shared/api";
import { formatDuration, formatRating, formatYear, getTmdbImage } from "@/shared/lib";
import { Header, MovieHeaderActions } from "@/widgets/header";
import { FALLBACK_MOVIE, MovieHero, type MovieHeroData } from "@/widgets/movie-hero";
import { Footer } from "@/widgets/footer";
import styles from "./MoviePage.module.css";

function mapMovie(details: MovieDetails200): MovieHeroData {
  return {
    title: details.title ?? FALLBACK_MOVIE.title,
    overview: details.overview ?? FALLBACK_MOVIE.overview,
    backdrop:
      getTmdbImage(details.backdrop_path, "original") ||
      getTmdbImage(details.poster_path, "w780") ||
      FALLBACK_MOVIE.backdrop,
    rating: details.vote_average ? String(formatRating(details.vote_average)) : "",
    year: formatYear(details.release_date),
    genres: (details.genres ?? [])
      .map((genre) => genre.name)
      .filter(Boolean)
      .join(", "),
    countries: (details.production_countries ?? [])
      .map((country) => country.name)
      .filter(Boolean)
      .join(", "),
    duration: formatDuration(details.runtime),
  };
}

export function MoviePage() {
  const [movie, setMovie] = useState<MovieHeroData>(FALLBACK_MOVIE);

  useEffect(() => {
    let cancelled = false;

    requests
      .moviePopularList()
      .then(({ data }) => {
        const id = data.results?.find((item) => item.backdrop_path)?.id;
        if (!id) throw new Error("movie");
        return requests.movieDetails(id);
      })
      .then(({ data }) => {
        if (!cancelled) setMovie(mapMovie(data));
      })
      .catch(() => {
        if (!cancelled) setMovie(FALLBACK_MOVIE);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header overlay actions={<MovieHeaderActions />} />
      <main>
        <MovieHero movie={movie} />
        <section className={styles.about} aria-labelledby="movie-about-title">
          <div className="container">
            <h2 id="movie-about-title" className={styles.aboutTitle}>
              О фильме
            </h2>
            <p className={styles.aboutText}>{movie.overview}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
