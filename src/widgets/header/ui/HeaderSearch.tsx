import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { MovieSearch } from "./MovieSearch";
import styles from "./HeaderSearch.module.css";

type HeaderSearchProps = {
  buttonClassName: string;
  iconClassName: string;
  iconOnly?: boolean;
};

export function HeaderSearch({
  buttonClassName,
  iconClassName,
  iconOnly = false,
}: HeaderSearchProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={clsx(buttonClassName, open && styles.buttonHidden)}
        aria-label={iconOnly ? "Поиск" : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={iconClassName} aria-hidden="true" />
        {iconOnly ? null : <span>Поиск</span>}
      </button>
      {open ? <MovieSearch onClose={() => setOpen(false)} /> : null}
    </div>
  );
}
