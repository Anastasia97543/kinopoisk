import { PLAN_FEATURES, PLANS } from "../../../shared/api/mock";
import { PlanCard } from "./PlanCard";
import styles from "./Plans.module.css";

export function Plans() {
  return (
    <section className={styles.section} id="plans" aria-labelledby="plans-title">
      <div className="container">
        <h2 id="plans-title" className={styles.title}>
          Тарифные планы
        </h2>

        <ul className={styles.list}>
          {PLANS.map((plan) => (
            <li key={plan.id} className={styles.item}>
              <PlanCard plan={plan} features={PLAN_FEATURES} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
