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
