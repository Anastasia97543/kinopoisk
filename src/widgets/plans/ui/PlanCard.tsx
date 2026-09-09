import clsx from "clsx";
import { Button } from "../../../shared/ui/atoms/Button";
import checkIcon from "../../../shared/assets/svg/check.svg";
import lockIcon from "../../../shared/assets/svg/lock.svg";
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
      <div className={styles.content}>
        <h3 className={styles.name}>{plan.name}</h3>

        <ul className={styles.features}>
          {features.map((feature) => {
            const included = plan.includedFeatureIds.includes(feature.id);

            return (
              <li
                key={feature.id}
                className={clsx(styles.feature, !included && styles.featureLocked)}
              >
                <img
                  src={included ? checkIcon : lockIcon}
                  alt=""
                  width={20}
                  height={20}
                  className={styles.featureIcon}
                />
                <span className={styles.featureLabel}>{feature.label}</span>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          <Button color="accent" className={styles.button} type="button">
            Оформить подписку
          </Button>
          <p className={styles.price}>{plan.price}₽</p>
        </div>
      </div>
    </article>
  );
}
