import { useEffect, useState } from "react";
import { ADVANTAGES } from "@/shared/api/mock";
import { fetchPersonPhotos } from "@/shared/api";
import styles from "./Advantages.module.css";

export function Advantages() {
  const [items, setItems] = useState(ADVANTAGES);

  useEffect(() => {
    let cancelled = false;

    fetchPersonPhotos()
      .then((photos) => {
        if (cancelled || photos.length === 0) return;
        setItems(
          ADVANTAGES.map((item, index) => ({
            ...item,
            icon: photos[index] ?? item.icon,
          })),
        );
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="advantages-title">
      <div className="container">
        <h2 id="advantages-title" className={styles.title}>
          Преимущества КиноДома
        </h2>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <img src={item.icon} alt="" className={styles.icon} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
