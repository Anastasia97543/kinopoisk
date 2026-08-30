import type { ReactNode } from "react";

export type BadgeType = "premiere" | "soon";

export type BadgeProps = {
  children: ReactNode;
  type?: BadgeType;
  className?: string;
};
