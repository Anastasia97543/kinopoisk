import styles from "./CollectionCard.module.css";

type CollectionCardProps = {
  image: string;
  title: string;
};

export function CollectionCard({ image, title }: CollectionCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}
