import type { ButtonHTMLAttributes } from "react";

export type ButtonColor = "accent" | "muted" | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
};
