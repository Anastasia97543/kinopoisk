import { useEffect, useState } from "react";
import { DISCOUNTS } from "@/shared/api/mock";
import { fetchPersonPhotos } from "@/shared/api";
import { DiscountCard } from "./DiscountCard";
import styles from "./Discounts.module.css";

export function Discounts() {
  const [items, setItems] = useState(DISCOUNTS);

  useEffect(() => {
    let cancelled = false;

    fetchPersonPhotos()
      .then((photos) => {
        if (cancelled || photos.length < 6) return;
        setItems(
          DISCOUNTS.map((item, index) => ({
            ...item,
            icon: photos[index + 4] ?? item.icon,
          })),
        );
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section} id="discounts" aria-labelledby="discounts-title">
      <div className="container">
        <h2 id="discounts-title" className={styles.title}>
          Скидки на кино
        </h2>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <DiscountCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
