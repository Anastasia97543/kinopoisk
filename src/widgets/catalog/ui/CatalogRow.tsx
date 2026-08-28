import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowIcon from "../../../shared/assets/svg/arrow.svg";
import type { Movie } from "../../../shared/api/types";
import { MovieCard } from "../../../shared/ui/molecules/MovieCard";
import styles from "./CatalogRow.module.css";

import "swiper/css";

type CatalogRowProps = {
  title: string;
  items: Movie[];
};

export function CatalogRow({ title, items }: CatalogRowProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.block}>
      <h3 className={styles.category}>{title}</h3>

      <div className={styles.row}>
        <Swiper
          className={styles.swiper}
          slidesPerView={4}
          spaceBetween={20}
          onSwiper={(instance) => {
            setSwiper(instance);
            setIsEnd(instance.isEnd);
          }}
          onSlideChange={(instance) => {
            setIsEnd(instance.isEnd);
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <MovieCard
                poster={item.poster}
                title={item.title}
                rating={item.rating}
                caption={`${item.kind} • ${item.genres}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={styles.arrow}
          aria-label={`Дальше: ${title}`}
          disabled={isEnd}
          onClick={() => swiper?.slideNext()}
        >
          <img src={arrowIcon} alt="" width="34" height="34" />
        </button>
      </div>
    </div>
  );
}
