import { Children, useState, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import arrowIcon from "../../../assets/svg/arrow.svg";
import styles from "./Carousel.module.css";

import "swiper/css";

type CarouselProps = {
  children: ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
};

export function Carousel({
  children,
  slidesPerView = 4,
  spaceBetween = 20,
  prevLabel = "Назад",
  nextLabel = "Дальше",
  className,
}: CarouselProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncEdges = (instance: SwiperInstance) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  return (
    <div className={clsx(styles.row, className)}>
      <button
        type="button"
        className={clsx(styles.arrow, styles.prev)}
        aria-label={prevLabel}
        disabled={isBeginning}
        onClick={() => swiper?.slidePrev()}
      >
        <img src={arrowIcon} alt="" width="34" height="34" />
      </button>

      <Swiper
        className={styles.swiper}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        watchOverflow
        onSwiper={(instance) => {
          setSwiper(instance);
          syncEdges(instance);
        }}
        onSlideChange={syncEdges}
        onFromEdge={syncEdges}
        onReachBeginning={syncEdges}
        onReachEnd={syncEdges}
      >
        {Children.map(children, (child) => (
          <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className={clsx(styles.arrow, styles.next)}
        aria-label={nextLabel}
        disabled={isEnd}
        onClick={() => swiper?.slideNext()}
      >
        <img src={arrowIcon} alt="" width="34" height="34" />
      </button>
    </div>
  );
}
