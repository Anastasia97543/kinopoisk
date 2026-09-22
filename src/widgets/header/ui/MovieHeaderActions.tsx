import styles from "./MovieHeaderActions.module.css";

export function MovieHeaderActions() {
  return (
    <div className={styles.actions}>
      <button type="button" className={styles.search}>
        <span className={styles.searchIcon} aria-hidden="true" />
        <span>Поиск</span>
      </button>

      <button type="button" className={styles.iconButton} aria-label="Уведомления">
        <span className={styles.bellIcon} aria-hidden="true" />
      </button>

      <button type="button" className={styles.avatar} aria-label="Профиль" />
    </div>
  );
}
