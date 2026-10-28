import { HeaderSearch } from "./HeaderSearch";
import styles from "./MovieHeaderActions.module.css";

export function MovieHeaderActions() {
  return (
    <div className={styles.actions}>
      <HeaderSearch buttonClassName={styles.search} iconClassName={styles.searchIcon} />

      <button type="button" className={styles.iconButton} aria-label="Уведомления">
        <span className={styles.bellIcon} aria-hidden="true" />
      </button>

      <button type="button" className={styles.avatar} aria-label="Профиль" />
    </div>
  );
}
