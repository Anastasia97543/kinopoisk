import { LazyImage } from "@/shared/ui/atoms";
import styles from "./CollectionCard.module.css";

type CollectionCardProps = {
  title: string;
  image: string;
};

export function CollectionCard({ title, image }: CollectionCardProps) {
  return (
    <article className={styles.card}>
      {image ? (
        <LazyImage src={image} alt={title} className={styles.image} />
      ) : (
        <span className={styles.placeholder} aria-hidden="true" />
      )}
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}
