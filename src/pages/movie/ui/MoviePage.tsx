import { useEffect, useState } from "react";
import {
  requests,
  type MovieDetails200,
  type MovieReviews200ResultsItem,
  type MovieSimilar200ResultsItem,
} from "@/shared/api";
import { formatDuration, formatRating, formatYear, getTmdbImage } from "@/shared/lib";
import { Header, MovieHeaderActions } from "@/widgets/header";
import { MovieHero, type MovieHeroData } from "@/widgets/movie-hero";
import { CatalogRow, type Movie } from "@/widgets/catalog";
import { Reviews } from "@/widgets/reviews";
import { Footer } from "@/widgets/footer";
import styles from "./MoviePage.module.css";

function mapMovie(details: MovieDetails200): MovieHeroData {
  return {
    title: details.title ?? "",
    overview: details.overview ?? "",
    backdrop:
      getTmdbImage(details.backdrop_path, "original") || getTmdbImage(details.poster_path, "w780"),
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

function mapSimilar(results: MovieSimilar200ResultsItem[] = []): Movie[] {
  return results
    .filter((movie) => movie.id)
    .map((movie) => ({
      id: String(movie.id),
      title: movie.title ?? "",
      rating: formatRating(movie.vote_average),
      kind: "Фильм",
      genres: movie.release_date?.slice(0, 4) ?? "",
      poster: getTmdbImage(movie.poster_path),
    }));
}

type MoviePageProps = {
  id?: string;
};

export function MoviePage({ id }: MoviePageProps) {
  const [movie, setMovie] = useState<MovieHeroData | null>(null);
  const [genre, setGenre] = useState("Фильмы");
  const [reviews, setReviews] = useState<MovieReviews200ResultsItem[]>([]);
  const [similar, setSimilar] = useState<Movie[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const movieId = Number(id);
    if (!movieId) {
      setFailed(true);
      return;
    }

    let cancelled = false;
    setFailed(false);
    setMovie(null);

    Promise.all([
      requests.movieDetails(movieId),
      requests.movieReviews(movieId),
      requests.movieSimilar(movieId),
    ])
      .then(([details, reviewList, similarList]) => {
        if (cancelled) return;
        setMovie(mapMovie(details.data));
        setGenre(details.data.genres?.[0]?.name || "Фильмы");
        setReviews(reviewList.data.results ?? []);
        setSimilar(mapSimilar(similarList.data.results));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className={styles.page}>
      <Header overlay actions={<MovieHeaderActions />} />
      <main>
        {movie ? <MovieHero movie={movie} /> : <div className={styles.heroSpacer} />}

        <div className="container">
          {failed ? (
            <p className={styles.error}>Не удалось загрузить фильм</p>
          ) : movie ? (
            <div className={styles.details}>
              <section className={styles.about} aria-labelledby="movie-about-title">
                <h2 id="movie-about-title" className={styles.title}>
                  О фильме
                </h2>
                <p className={styles.aboutText}>{movie.overview}</p>
              </section>

              <Reviews items={reviews} />
            </div>
          ) : null}
        </div>

        {similar.length > 0 ? (
          <section className={styles.catalog} aria-labelledby="movie-catalog-title">
            <div className="container">
              <h2 id="movie-catalog-title" className={styles.title}>
                Каталог фильмов и сериалов
              </h2>
              <CatalogRow title={genre} items={similar} />
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
