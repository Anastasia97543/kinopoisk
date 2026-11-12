import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { ROUTES } from "@/shared/lib";
import { NAV_LINKS } from "../model";
import { HeaderActions } from "./HeaderActions";
import { HeaderSearchButton } from "./HeaderSearch";
import { MovieSearch } from "./MovieSearch";
import styles from "./Header.module.css";

type HeaderProps = {
  overlay?: boolean;
  actions?: ReactNode;
  navSearch?: boolean;
};

export function Header({ overlay = false, actions, navSearch = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-search]")) return;
      setOpen(false);
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
    <header className={clsx(styles.header, overlay && styles.overlay)}>
      <div className={clsx("container", styles.inner)}>
        <div className={styles.left}>
          <Link to={ROUTES.HOME} className={styles.logo} aria-label="КиноДом — на главную">
            <span className={styles.logoKino}>КИНО</span>
            <span className={styles.logoDom}>ДОМ</span>
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {navSearch ? (
                <li>
                  <HeaderSearchButton
                    iconOnly
                    open={open}
                    onToggle={() => setOpen((value) => !value)}
                  />
                </li>
              ) : null}
            </ul>
          </nav>
        </div>

        <div className={styles.gap}>
          {navSearch && open ? <MovieSearch onClose={() => setOpen(false)} /> : null}
        </div>

        {actions ?? (
          <HeaderActions
            searchOpen={open}
            onSearchToggle={() => setOpen((value) => !value)}
            onSearchClose={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
