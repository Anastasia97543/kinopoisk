import { ADVANTAGES } from "../../data/mock";
import styles from "./Advantages.module.css";

export function Advantages() {
  return (
    <section className={styles.section} aria-labelledby="advantages-title">
      <div className="container">
        <h2 id="advantages-title" className={styles.title}>
          Преимущества КиноДома
        </h2>

        <ul className={styles.list}>
          {ADVANTAGES.map((item) => (
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
