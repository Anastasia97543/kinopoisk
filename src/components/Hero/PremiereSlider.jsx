import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import arrowIcon from "../../assets/svg/arrow.svg";
import { Badge } from "../shared/Badge/Badge";
import styles from "./PremiereSlider.module.css";

import "swiper/css";

export function PremiereSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className={styles.slider}>
      <button type="button" className={clsx(styles.arrow, "js-slider-prev")} aria-label="Назад">
        <img src={arrowIcon} alt="" width="34" height="34" />
      </button>

      <div className={styles.body}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={-189}
          loop
          watchSlidesProgress
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
                <img src={item.poster} alt={item.title} className={styles.poster} />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.meta}>
          <p className={styles.title}>
            {active.title}. {active.subtitle}
          </p>
          <div className={styles.metaRow}>
            <Badge type={active.badgeType}>{active.badge}</Badge>
            <span className={styles.date}>{active.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
