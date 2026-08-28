import firstCard from "../assets/cards/first-card.png";
import secondCard from "../assets/cards/second-card.png";
import thirdCard from "../assets/cards/third-card.png";
import avatarIcon from "../assets/icons/avatar.png";
import ironManIcon from "../assets/icons/iron-man.png";
import yodaIcon from "../assets/icons/magistr-yoda.png";
import userNerdIcon from "../assets/icons/user-nerds.png";
import comedyBaywatch from "../assets/catalog/baywatch.png";
import comedyBudapest from "../assets/catalog/budapest.png";
import comedyPool from "../assets/catalog/pool.png";
import comedyBrassic from "../assets/catalog/brassic.png";

export const NAV_LINKS = [
  { id: "films", label: "Фильмы", href: "#films" },
  { id: "series", label: "Сериалы", href: "#series" },
  { id: "collections", label: "Подборки", href: "#collections" },
];

export const PREMIERES = [
  {
    id: 1,
    title: "Бесстыжие",
    subtitle: "11 сезон. Финал",
    badge: "Премьера",
    badgeType: "premiere",
    date: "12 декабря",
    poster: firstCard,
  },
  {
    id: 2,
    title: "Мегамозг",
    subtitle: "Против Синдикат",
    badge: "Премьера",
    badgeType: "premiere",
    date: "18 декабря",
    poster: secondCard,
  },
  {
    id: 3,
    title: "Однажды в лесу",
    subtitle: "Фильм Люка Жаке",
    badge: "Скоро",
    badgeType: "soon",
    date: "13 ноября",
    poster: thirdCard,
  },
];

export const ADVANTAGES = [
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

export const COMEDIES = [
  {
    id: 1,
    title: "Спасатели Малибу",
    rating: 5.6,
    kind: "Фильм",
    genres: "Комедия, боевик",
    poster: comedyBaywatch,
  },
  {
    id: 2,
    title: " ",
    rating: 7.9,
    kind: "Фильм",
    genres: "Комедия, криминал",
    poster: comedyBudapest,
  },
  {
    id: 3,
    title: " ",
    rating: 7.3,
    kind: "Фильм",
    genres: "Мелодрама, комедия",
    poster: comedyPool,
  },
  {
    id: 4,
    title: " ",
    rating: 8.8,
    kind: "Сериал",
    genres: "Комедия",
    poster: comedyBrassic,
  },
];
