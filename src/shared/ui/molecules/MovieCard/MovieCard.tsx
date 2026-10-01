import { Link } from "react-router";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  poster: string;
  title: string;
  rating: number;
  caption: string;
  to: string;
};

export function MovieCard({ poster, title, rating, caption, to }: MovieCardProps) {
  return (
    <article className={styles.card}>
      <Link to={to} className={styles.posterLink}>
        {poster ? (
          <img src={poster} alt={title} className={styles.poster} />
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}
      </Link>
      <p className={styles.caption}>
        <span className={styles.rating}>{rating}</span>
        {caption ? ` • ${caption}` : null}
      </p>
      <p className={styles.title}>{title}</p>
    </article>
  );
}
