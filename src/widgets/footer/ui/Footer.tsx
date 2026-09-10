import clsx from "clsx";
import facebookIcon from "../../../assets/svg/facebook.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import mailIcon from "../../../assets/svg/mail.svg";
import phoneIcon from "../../../assets/svg/phone.svg";
import vkIcon from "../../../assets/svg/b.svg";
import { FOOTER_COLUMNS } from "../model";
import styles from "./Footer.module.css";

const contactIcons = {
  phone: phoneIcon,
  mail: mailIcon,
};

const socialIcons = {
  facebook: facebookIcon,
  vk: vkIcon,
  instagram: instagramIcon,
};

const copyrightYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.inner)}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="КиноДом — на главную">
            <span className={styles.logoKino}>КИНО</span>
            <span className={styles.logoDom}>ДОМ</span>
          </a>
          <p className={styles.copyright}>© КиноДом {copyrightYear}</p>
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
                          <a
                            href={link.href}
                            className={clsx(styles.link, link.icon && styles.contact)}
                          >
                            {link.icon ? (
                              <img
                                src={contactIcons[link.icon]}
                                alt=""
                                className={styles.contactIcon}
                              />
                            ) : null}
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {group.socials && group.socials.length > 0 ? (
                    <ul className={styles.socials}>
                      {group.socials.map((social) => (
                        <li key={social.id}>
                          <a href={social.href} className={styles.social} aria-label={social.label}>
                            <img src={socialIcons[social.icon]} alt="" width={24} height={24} />
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
