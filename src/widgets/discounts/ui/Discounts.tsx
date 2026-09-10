import { DISCOUNTS } from "../../../shared/api/mock";
import { DiscountCard } from "./DiscountCard";
import styles from "./Discounts.module.css";

export function Discounts() {
  return (
    <section className={styles.section} id="discounts" aria-labelledby="discounts-title">
      <div className="container">
        <h2 id="discounts-title" className={styles.title}>
          Скидки на кино
        </h2>

        <ul className={styles.list}>
          {DISCOUNTS.map((item) => (
            <li key={item.id}>
              <DiscountCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
