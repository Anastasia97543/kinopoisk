import clsx from "clsx";
import styles from "./Button.module.css";

export function Button({
  children,
  color = "accent",
  type = "button",
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.button, styles[color], className)}
      {...props}
    >
      {children}
    </button>
  );
}
