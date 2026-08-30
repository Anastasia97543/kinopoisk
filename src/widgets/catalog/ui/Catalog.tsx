import { CATALOG } from "../../../shared/api/mock";
import { Button } from "../../../shared/ui/atoms/Button";
import { CatalogRow } from "./CatalogRow";
import styles from "./Catalog.module.css";

export function Catalog() {
  return (
    <section className={styles.section} id="films" aria-labelledby="catalog-title">
      <div className="container">
        <h2 id="catalog-title" className={styles.title}>
          Каталог фильмов и сериалов
        </h2>

        {CATALOG.map((row) => (
          <CatalogRow key={row.id} title={row.title} items={row.items} />
        ))}

        <div className={styles.footer}>
          <Button color="ghost" type="button">
            Посмотреть всё
          </Button>
        </div>
      </div>
    </section>
  );
}
