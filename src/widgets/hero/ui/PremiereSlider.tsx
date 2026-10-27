import { useEffect, useState } from "react";
import { Link } from "react-router";
import { EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import arrowIcon from "@/assets/svg/arrow.svg";
import { moviePath } from "@/shared/lib";
import { Badge } from "@/shared/ui/atoms/Badge";
import type { Premiere } from "../model";
import styles from "./PremiereSlider.module.css";

import "swiper/css";
import "swiper/css/effect-creative";

type PremiereSliderProps = {
  items: Premiere[];
};

const SLIDE_MS = 600;
const META_MS = 200;

export function PremiereSlider({ items }: PremiereSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shownIndex, setShownIndex] = useState(0);
  const [metaVisible, setMetaVisible] = useState(true);
  const shown = items[shownIndex];

  useEffect(() => {
    if (activeIndex === shownIndex) return;

    setMetaVisible(false);
    const timer = window.setTimeout(() => {
      setShownIndex(activeIndex);
      setMetaVisible(true);
    }, META_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, shownIndex]);

  if (!shown) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <button type="button" className={clsx(styles.arrow, "js-slider-prev")} aria-label="Назад">
        <img src={arrowIcon} alt="" width="34" height="34" />
      </button>

      <div className={styles.body}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, EffectCreative]}
          slidesPerView="auto"
          spaceBetween={0}
          speed={SLIDE_MS}
          loop
          effect="creative"
          creativeEffect={{
            limitProgress: 2,
            perspective: false,
            prev: {
              translate: ["-20%", 0, 0],
              scale: 0.9,
              opacity: 0,
              origin: "left center",
            },
            next: {
              translate: ["189px", 0, 0],
              scale: 0.9,
              opacity: 0.7,
              origin: "left center",
            },
          }}
          navigation={{
            prevEl: ".js-slider-prev",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <article className={styles.card}>
                <Link to={moviePath(item.id)} className={styles.posterLink}>
                  {item.poster ? (
                    <img src={item.poster} alt={item.title} className={styles.poster} />
                  ) : (
                    <span className={styles.placeholder} />
                  )}
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={clsx(styles.meta, !metaVisible && styles.metaHidden)}>
          <p className={styles.title}>
            {shown.title}. {shown.subtitle}
          </p>
          <div className={styles.metaRow}>
            <Badge type={shown.badgeType}>{shown.badge}</Badge>
            <span className={styles.date}>{shown.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
