import styles from "./MovieCard.module.css";

type MovieCardProps = {
  poster: string;
  title: string;
  rating: number;
  caption: string;
};

export function MovieCard({ poster, title, rating, caption }: MovieCardProps) {
  return (
    <article className={styles.card}>
      <img src={poster} alt={title} className={styles.poster} />
      <p className={styles.caption}>
        <span className={styles.rating}>{rating}</span>
        {caption ? ` • ${caption}` : null}
      </p>
      <p className={styles.title}>{title}</p>
    </article>
  );
}
