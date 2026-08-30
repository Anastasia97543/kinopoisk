import clsx from "clsx";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  color = "accent",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={clsx(styles.button, styles[color], className)} {...props}>
      {children}
    </button>
  );
}
