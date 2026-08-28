import styles from "./HeaderActions.module.css";

export function HeaderActions() {
  return (
    <div className={styles.actions}>
      <button type="button" className={styles.search}>
        <span className={styles.searchIcon} aria-hidden="true" />
        <span>Поиск</span>
      </button>

      <button type="button" className={styles.iconButton} aria-label="Уведомления">
        <span className={styles.bellIcon} aria-hidden="true" />
      </button>

      <button type="button" className={styles.profile} aria-label="Профиль">
        <span className={styles.userIcon} aria-hidden="true" />
      </button>
    </div>
  );
}
