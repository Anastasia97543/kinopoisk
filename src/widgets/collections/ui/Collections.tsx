import { COLLECTIONS } from "../../../shared/api/mock";
import { Carousel } from "../../../shared/ui/molecules/Carousel";
import { CollectionCard } from "../../../shared/ui/molecules/CollectionCard";
import styles from "./Collections.module.css";

export function Collections() {
  return (
    <section className={styles.section} id="collections" aria-labelledby="collections-title">
      <div className="container">
        <h2 id="collections-title" className={styles.title}>
          Тематические подборки
        </h2>

        <Carousel slidesPerView={4} spaceBetween={20} prevLabel="Назад" nextLabel="Дальше">
          {COLLECTIONS.map((item) => (
            <CollectionCard key={item.id} image={item.image} title={item.title} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
