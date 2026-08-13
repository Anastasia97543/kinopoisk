import arrowIcon from "../../assets/svg/arrow.svg";
import { Badge } from "../ui/Badge/Badge";
import styles from "./PremiereSlider.module.css";

export function PremiereSlider({ items }) {
  const [front, middle, back] = items;

  return (
    <div className={styles.slider}>
      <button type="button" className={styles.arrow} aria-label="Назад">
        <img src={arrowIcon} alt="" width="34" height="34" />
      </button>

      <div className={styles.body}>
        <div className={styles.stage}>
          <article className={`${styles.card} ${styles.layer2}`}>
            <img src={back.poster} alt="" className={styles.poster} />
          </article>
          <article className={`${styles.card} ${styles.layer1}`}>
            <img src={middle.poster} alt="" className={styles.poster} />
          </article>
          <article className={`${styles.card} ${styles.layer0}`}>
            <img
              src={front.poster}
              alt={front.title}
              className={styles.poster}
            />
          </article>
        </div>

        <div className={styles.meta}>
          <p className={styles.title}>
            {front.title}. {front.subtitle}
          </p>
          <div className={styles.metaRow}>
            <Badge>{front.badge}</Badge>
            <span className={styles.date}>{front.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
