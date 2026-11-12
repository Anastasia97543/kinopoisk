import type { ReactNode } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { ROUTES } from "@/shared/lib";
import { NAV_LINKS } from "../model";
import { HeaderActions } from "./HeaderActions";
import { HeaderSearch } from "./HeaderSearch";
import styles from "./Header.module.css";

type HeaderProps = {
  overlay?: boolean;
  actions?: ReactNode;
  navSearch?: boolean;
};

export function Header({ overlay = false, actions, navSearch = false }: HeaderProps) {
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
                  <HeaderSearch
                    iconOnly
                    buttonClassName={styles.search}
                    iconClassName={styles.searchIcon}
                  />
                </li>
              ) : null}
            </ul>
          </nav>
        </div>

        {actions ?? <HeaderActions />}
      </div>
    </header>
  );
}
