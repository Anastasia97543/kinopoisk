import clsx from "clsx";
import styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

export function Badge({ children, type = "premiere", className }: BadgeProps) {
  return <span className={clsx(styles.badge, styles[type], className)}>{children}</span>;
}
