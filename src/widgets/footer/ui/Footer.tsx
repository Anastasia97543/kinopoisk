import clsx from "clsx";
import { FOOTER_COLUMNS } from "../model";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.inner)}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="КиноДом — на главную">
            <span className={styles.logoKino}>КИНО</span>
            <span className={styles.logoDom}>ДОМ</span>
          </a>
          <p className={styles.copyright}>© КиноДом 2020</p>
        </div>

        <nav className={styles.columns} aria-label="Навигация в подвале">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.id} className={styles.column}>
              {column.groups.map((group) => (
                <div key={group.title} className={styles.group}>
                  {group.href ? (
                    <a href={group.href} className={styles.groupTitle}>
                      {group.title}
                    </a>
                  ) : (
                    <p className={styles.groupTitle}>{group.title}</p>
                  )}

                  {group.links.length > 0 ? (
                    <ul className={styles.list}>
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className={styles.link}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
