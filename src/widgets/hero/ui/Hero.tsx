import { useEffect, useState } from "react";
import clsx from "clsx";
import { PREMIERES } from "@/shared/api/mock";
import { fetchMovies, tmdbImage } from "@/shared/api";
import { Button } from "@/shared/ui/atoms/Button";
import type { Premiere } from "../model";
import { PremiereSlider } from "./PremiereSlider";
import styles from "./Hero.module.css";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
}

export function Hero() {
  const [premieres, setPremieres] = useState<Premiere[]>(PREMIERES);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const upcoming = await fetchMovies("/3/movie/upcoming");
        const mapped: Premiere[] = upcoming
          .filter((movie) => movie.poster_path)
          .slice(0, 3)
          .map((movie, index) => ({
            id: movie.id,
            title: movie.title,
            subtitle: movie.overview?.split(". ")[0] ?? "",
            badge: index === 2 ? "Скоро" : "Премьера",
            badgeType: index === 2 ? "soon" : "premiere",
            date: formatDate(movie.release_date),
            poster: tmdbImage(movie.poster_path, "w780"),
          }));

        if (!cancelled && mapped.length > 0) setPremieres(mapped);
      } catch {
        if (!cancelled) setPremieres(PREMIERES);
      }
    }

    void load();

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
