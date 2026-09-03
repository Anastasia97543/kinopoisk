import clsx from "clsx";
import { Button } from "../../../shared/ui/atoms/Button";
import type { Plan, PlanFeature } from "../model";
import styles from "./PlanCard.module.css";

type PlanCardProps = {
  plan: Plan;
  features: PlanFeature[];
};

const planTone: Record<string, string | undefined> = {
  lite: styles.lite,
  optimum: styles.optimum,
  premium: styles.premium,
};

export function PlanCard({ plan, features }: PlanCardProps) {
  return (
    <article className={clsx(styles.card, planTone[plan.id])}>
      <div className={styles.body}>
        <h3 className={styles.name}>{plan.name}</h3>

        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature.id} className={styles.feature}>
              <span className={styles.featureLabel}>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <Button color="accent" className={styles.button} type="button">
          Оформить подписку
        </Button>
        <p className={styles.price}>{plan.price}₽</p>
      </div>
    </article>
  );
}
