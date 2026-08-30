import type { BadgeType } from "../../shared/ui/atoms/Badge";

export type Premiere = {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeType: BadgeType;
  date: string;
  poster: string;
};
