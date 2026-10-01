import userNerdIcon from "@/assets/icons/user-nerds.png";
import yodaIcon from "@/assets/icons/magistr-yoda.png";

export type Discount = {
  id: string;
  title: string;
  paragraphs: string[];
  buttonLabel: string;
  buttonColor: "accent" | "ghost";
  icon: string;
};

export const DISCOUNTS: Discount[] = [
  {
    id: "activity",
    title: "Скидка 50% на активность в сервисе",
    paragraphs: [
      "Смотри кино, принимай участие в развитие сервиса: пиши рецензии, собирай подборки из фильмов и сериалов, проходи квизы.",
      "Копи баллы, и получай скидку 50% на любой тариф при следующей оплате подписки на КиноДом",
    ],
    buttonLabel: "Подробнее",
    buttonColor: "ghost",
    icon: userNerdIcon,
  },
  {
    id: "student",
    title: "Скидка для студентов 50%",
    paragraphs: [
      "Просто приложи фото действующего студенческого билета при оформлении подписки и наслаждайся кино!",
      "Важно! Скидка действует до конца текущего года. Студенческая скидка не суммируется с другими скидками и акциями сервиса",
    ],
    buttonLabel: "Я студент, я хочу скидку!",
    buttonColor: "accent",
    icon: yodaIcon,
  },
];
