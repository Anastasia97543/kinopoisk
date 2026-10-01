import { useEffect, useState } from "react";
import { requests } from "@/shared/api";
import { getTmdbImage } from "@/shared/lib";
import { Carousel } from "@/shared/ui/molecules/Carousel";
import { CollectionCard } from "@/shared/ui/molecules/CollectionCard";
import { COLLECTION_QUERIES, type Collection } from "../model";
import styles from "./Collections.module.css";

const EMPTY_COLLECTIONS: Collection[] = COLLECTION_QUERIES.map((item) => ({
  id: item.id,
  title: item.title,
  image: "",
}));

export function Collections() {
  const [items, setItems] = useState<Collection[]>(EMPTY_COLLECTIONS);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      COLLECTION_QUERIES.map((item) =>
        requests.searchCollection({ query: item.query }).then(({ data }) => {
          const found = data.results?.[0];

          return {
            id: item.id,
            title: item.title,
            image: getTmdbImage(found?.backdrop_path ?? found?.poster_path, "w780"),
          };
        }),
      ),
    )
      .then((nextItems) => {
        if (!cancelled) setItems(nextItems);
      })
      .catch(() => {
        if (!cancelled) setItems(EMPTY_COLLECTIONS);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section} id="collections" aria-labelledby="collections-title">
      <div className="container">
        <h2 id="collections-title" className={styles.title}>
          Тематические подборки
        </h2>

        <Carousel slidesPerView={4} spaceBetween={20} prevLabel="Назад" nextLabel="Дальше">
          {items.map((item) => (
            <CollectionCard key={item.id} image={item.image} title={item.title} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
