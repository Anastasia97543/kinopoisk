import { Button } from "../../../shared/ui/atoms/Button";
import type { Discount } from "../model";
import styles from "./DiscountCard.module.css";

type DiscountCardProps = {
  item: Discount;
};

export function DiscountCard({ item }: DiscountCardProps) {
  return (
    <article className={styles.card}>
      <img src={item.icon} alt="" className={styles.icon} width="56" height="56" />
      <h3 className={styles.name}>{item.title}</h3>
      {item.paragraphs.map((text) => (
        <p key={text} className={styles.text}>
          {text}
        </p>
      ))}
      <Button color={item.buttonColor} className={styles.button} type="button">
        {item.buttonLabel}
      </Button>
    </article>
  );
}
