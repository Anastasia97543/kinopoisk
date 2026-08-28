import clsx from "clsx";
import { Button } from "../shared/Button/Button";
import { PremiereSlider } from "./PremiereSlider";
import { PREMIERES } from "../../data/mock";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={clsx("container", styles.inner)}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Самые сочные премьеры кино — у вас дома
          </h1>
          <p className={styles.text}>
            Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.
            Целый месяц бесплатно!
          </p>
          <Button color="accent" type="button">
            Смотреть бесплатно
          </Button>
        </div>

        <div className={styles.visual}>
          <PremiereSlider items={PREMIERES} />
        </div>
      </div>
    </section>
  );
}
