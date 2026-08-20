import clsx from "clsx";
import styles from "./Badge.module.css";

export function Badge({ children, type = "premiere", className }) {
  return <span className={clsx(styles.badge, styles[type], className)}>{children}</span>;
}
