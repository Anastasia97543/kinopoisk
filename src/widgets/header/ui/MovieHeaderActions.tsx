import styles from "./MovieHeaderActions.module.css";

export function MovieHeaderActions() {
  return (
    <div className={styles.actions}>
      <button type="button" className={styles.avatar} aria-label="Профиль" />
    </div>
  );
}
