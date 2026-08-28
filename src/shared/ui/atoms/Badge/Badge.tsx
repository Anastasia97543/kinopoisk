import type { ReactNode } from "react";
import clsx from "clsx";
import type { BadgeType } from "../../../api/types";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  type?: BadgeType;
  className?: string;
};

export function Badge({ children, type = "premiere", className }: BadgeProps) {
  return <span className={clsx(styles.badge, styles[type], className)}>{children}</span>;
}
