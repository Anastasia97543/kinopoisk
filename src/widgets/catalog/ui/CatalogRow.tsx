import type { Movie } from "../model";
import { Carousel } from "../../../shared/ui/molecules/Carousel";
import { MovieCard } from "../../../shared/ui/molecules/MovieCard";
import styles from "./CatalogRow.module.css";

type CatalogRowProps = {
  title: string;
  items: Movie[];
};

export function CatalogRow({ title, items }: CatalogRowProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.category}>{title}</h3>

      <Carousel
        className={styles.carousel}
        slidesPerView={4}
        spaceBetween={20}
        prevLabel={`Назад: ${title}`}
        nextLabel={`Дальше: ${title}`}
      >
        {items.map((item) => (
          <MovieCard
            key={item.id}
            poster={item.poster}
            title={item.title}
            rating={item.rating}
            caption={`${item.kind} • ${item.genres}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
