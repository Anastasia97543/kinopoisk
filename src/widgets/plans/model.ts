export type PlanFeature = {
  id: string;
  label: string;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  featured?: boolean;
  includedFeatureIds: string[];
};

export const PLAN_FEATURES: PlanFeature[] = [
  { id: "daily", label: "Кино и сериалы на каждый день" },
  { id: "hits", label: "Суперхиты" },
  { id: "kids", label: "Всё для детей" },
  { id: "edu", label: "Образовательные передачи" },
  { id: "partners", label: "Amediateka и Start" },
];

export const PLANS: Plan[] = [
  {
    id: "lite",
    name: "ЛАЙТ",
    price: 250,
    includedFeatureIds: ["daily"],
  },
  {
    id: "optimum",
    name: "ОПТИУМ",
    price: 300,
    featured: true,
    includedFeatureIds: ["daily", "hits", "kids"],
  },
  {
    id: "premium",
    name: "ПРЕМИУМ",
    price: 400,
    includedFeatureIds: ["daily", "hits", "kids", "edu", "partners"],
  },
];
