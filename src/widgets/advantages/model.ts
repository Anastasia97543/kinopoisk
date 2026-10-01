import avatarIcon from "@/assets/icons/avatar.png";
import ironManIcon from "@/assets/icons/iron-man.png";
import yodaIcon from "@/assets/icons/magistr-yoda.png";
import userNerdIcon from "@/assets/icons/user-nerds.png";

export type Advantage = {
  id: string;
  title: string;
  text: string;
  icon: string;
};

export const ADVANTAGES: Advantage[] = [
  {
    id: "choice",
    title: "Большой выбор",
    text: "10 000 фильмов и сериалов уже в библиотеке. Ежедневное пополнение новинками кино",
    icon: avatarIcon,
  },
  {
    id: "recommend",
    title: "Список рекомендаций",
    text: "Персонализированный список рекомендаций, подобранных на основе ваших интересов",
    icon: ironManIcon,
  },
  {
    id: "world",
    title: "Лучшее мировое кино",
    text: "Кино, сериалы со всего мира, включая Европу и Азию. А также достойное российское кино",
    icon: yodaIcon,
  },
  {
    id: "free",
    title: "Месяц бесплатно",
    text: "Весь каталог КиноДома и все новинки кино и сериалов — бесплатно целый месяц после регистрации",
    icon: userNerdIcon,
  },
];
