import styles from "./CollectionCard.module.css";

type CollectionCardProps = {
  title: string;
  image: string;
};

export function CollectionCard({ title, image }: CollectionCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}
