import arrowIcon from "../../assets/svg/arrow.svg";
import { COMEDIES } from "../../data/mock";
import { MovieCard } from "../shared/MovieCard/MovieCard";
import styles from "./Catalog.module.css";

export function Catalog() {
  return (
    <section className={styles.section} id="films" aria-labelledby="catalog-title">
      <div className="container">
        <h2 id="catalog-title" className={styles.title}>
          Каталог фильмов и сериалов
        </h2>
        <h3 className={styles.category}>Комедии</h3>

        <div className={styles.row}>
          <ul className={styles.gallery}>
            {COMEDIES.map((item) => (
              <li key={item.id} className={styles.slide}>
                <MovieCard
                  poster={item.poster}
                  title={item.title}
                  rating={item.rating}
                  caption={`${item.kind} • ${item.genres}`}
                />
              </li>
            ))}
          </ul>

          <button type="button" className={styles.arrow} aria-label="Дальше">
            <img src={arrowIcon} alt="" width="34" height="34" />
          </button>
        </div>
      </div>
    </section>
  );
}
