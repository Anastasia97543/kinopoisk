import { NAV_LINKS } from '../../data/mock'
import { HeaderActions } from './HeaderActions'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <a href="/" className={styles.logo} aria-label="КиноДом — на главную">
            <span className={styles.logoKino}>КИНО</span>
            <span className={styles.logoDom}>ДОМ</span>
          </a>

          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <HeaderActions />
      </div>
    </header>
  )
}
