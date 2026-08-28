import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowIcon from "../../../shared/assets/svg/arrow.svg";
import { COLLECTIONS } from "../../../shared/api/mock";
import { CollectionCard } from "../../../shared/ui/molecules/CollectionCard";
import styles from "./Collections.module.css";

import "swiper/css";

export function Collections() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.section} id="collections" aria-labelledby="collections-title">
      <div className="container">
        <h2 id="collections-title" className={styles.title}>
          Тематические подборки
        </h2>

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
            {COLLECTIONS.map((item) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                <CollectionCard image={item.image} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Дальше"
            disabled={isEnd}
            onClick={() => swiper?.slideNext()}
          >
            <img src={arrowIcon} alt="" width="34" height="34" />
          </button>
        </div>
      </div>
    </section>
  );
}
