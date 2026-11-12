import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./LazyImage.module.css";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = boxRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={clsx(styles.box, className)}>
      {!loaded ? <span className={styles.skeleton} aria-hidden="true" /> : null}

      {inView ? (
        <img
          src={src}
          alt={alt}
          className={clsx(styles.image, !loaded && styles.imageHidden)}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      ) : null}
    </div>
  );
}
