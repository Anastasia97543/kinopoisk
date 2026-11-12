import { HeaderSearchButton } from "./HeaderSearch";
import { MovieSearch } from "./MovieSearch";
import styles from "./HeaderActions.module.css";

type HeaderActionsProps = {
  searchOpen: boolean;
  onSearchToggle: () => void;
  onSearchClose: () => void;
};

export function HeaderActions({ searchOpen, onSearchToggle, onSearchClose }: HeaderActionsProps) {
  return (
    <div className={styles.actions}>
      {searchOpen ? (
        <div className={styles.fieldSlot}>
          <MovieSearch onClose={onSearchClose} />
        </div>
      ) : (
        <HeaderSearchButton open={searchOpen} onToggle={onSearchToggle} />
      )}

      <button type="button" className={styles.iconButton} aria-label="Уведомления">
        <span className={styles.bellIcon} aria-hidden="true" />
      </button>

      <button type="button" className={styles.profile} aria-label="Профиль">
        <span className={styles.userIcon} aria-hidden="true" />
      </button>
    </div>
  );
}
