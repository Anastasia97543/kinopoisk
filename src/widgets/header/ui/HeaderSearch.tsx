import clsx from "clsx";
import styles from "./HeaderSearch.module.css";

type HeaderSearchButtonProps = {
  open: boolean;
  iconOnly?: boolean;
  onToggle: () => void;
};

export function HeaderSearchButton({ open, iconOnly = false, onToggle }: HeaderSearchButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.button, iconOnly && styles.iconOnly)}
      data-search=""
      aria-label={iconOnly ? "Поиск" : undefined}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span className={styles.icon} aria-hidden="true" />
      {iconOnly ? null : <span>Поиск</span>}
    </button>
  );
}
