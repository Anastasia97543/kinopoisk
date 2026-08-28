import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonColor = "accent" | "muted" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
};

export function Button({
  children,
  color = "accent",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[color], className)}
      {...props}
    >
      {children}
    </button>
  );
}
