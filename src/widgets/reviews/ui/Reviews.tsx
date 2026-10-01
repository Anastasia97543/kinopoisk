import { useState } from "react";
import type { MovieReviews200ResultsItem } from "@/shared/api";
import { getTmdbImage } from "@/shared/lib";
import { Button } from "@/shared/ui/atoms/Button";
import styles from "./Reviews.module.css";

type ReviewsProps = {
  items: MovieReviews200ResultsItem[];
};

const LIMIT = 2;

function reviewAvatar(path?: string) {
  if (!path) return "";
  if (path.includes("http")) return path.replace(/^\//, "");
  return getTmdbImage(path, "w185");
}

function reviewDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Reviews({ items }: ReviewsProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, LIMIT);

  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <h2 id="reviews-title" className={styles.title}>
        Рецензии
      </h2>

      {items.length === 0 ? (
        <p className={styles.empty}>Рецензий пока нет</p>
      ) : (
        <ul className={styles.list}>
          {visible.map((review) => {
            const name = review.author_details?.name || review.author || "Зритель";
            const avatar = reviewAvatar(review.author_details?.avatar_path);
            const rating = Number(review.author_details?.rating);

            return (
              <li key={review.id} className={styles.card}>
                <div className={styles.person}>
                  {avatar ? (
                    <img src={avatar} alt="" className={styles.avatar} />
                  ) : (
                    <span className={styles.avatar} aria-hidden="true" />
                  )}
                  <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.date}>{reviewDate(review.created_at)}</p>
                  </div>
                </div>
                {Number.isFinite(rating) && rating > 0 ? (
                  <p className={styles.rating}>{rating}/10</p>
                ) : null}
                <p className={styles.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {items.length > LIMIT ? (
        <Button color="ghost" type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Свернуть" : "Посмотреть всё"}
        </Button>
      ) : null}
    </section>
  );
}
