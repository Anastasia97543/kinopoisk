import { useEffect, useState } from "react";
import clsx from "clsx";
import { PREMIERES } from "@/shared/api/mock";
import { requests } from "@/shared/api";
import { formatRuDate, getTmdbImage } from "@/shared/lib";
import { Button } from "@/shared/ui/atoms/Button";
import type { Premiere } from "../model";
import { PremiereSlider } from "./PremiereSlider";
import styles from "./Hero.module.css";

export function Hero() {
  const [premieres, setPremieres] = useState<Premiere[]>(PREMIERES);

  useEffect(() => {
    let cancelled = false;

    requests
      .movieUpcomingList()
      .then(({ data }) => {
        const mapped: Premiere[] = (data.results ?? [])
          .filter((movie) => movie.poster_path || movie.backdrop_path)
          .slice(0, 3)
          .map((movie, index) => ({
            id: movie.id ?? index,
            title: movie.title ?? "",
            subtitle: movie.overview?.split(". ")[0] ?? "",
            badge: index === 2 ? "Скоро" : "Премьера",
            badgeType: index === 2 ? "soon" : "premiere",
            date: formatRuDate(movie.release_date),
            poster:
              getTmdbImage(movie.poster_path, "w780") || getTmdbImage(movie.backdrop_path, "w780"),
          }));

        if (!cancelled && mapped.length > 0) setPremieres(mapped);
      })
      .catch(() => {
        if (!cancelled) setPremieres(PREMIERES);
      });

    return () => {
      cancelled = true;
    };
  }, []);

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
          <PremiereSlider items={premieres} />
        </div>
      </div>
    </section>
  );
}
