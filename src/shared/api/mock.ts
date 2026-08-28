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
import type { Advantage, CatalogRowData, Collection, NavLink, Premiere } from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: "films", label: "Фильмы", href: "#films" },
  { id: "series", label: "Сериалы", href: "#series" },
  { id: "collections", label: "Подборки", href: "#collections" },
];

export const PREMIERES: Premiere[] = [
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

const catalogPosters = [comedyBaywatch, comedyBudapest, comedyPool, comedyBrassic];

export const CATALOG: CatalogRowData[] = [
  {
    id: "comedies",
    title: "Комедии",
    items: [
      {
        id: "c1",
        title: "Спасатели Малибу",
        rating: 5.6,
        kind: "Фильм",
        genres: "Комедия, боевик",
        poster: catalogPosters[0],
      },
      {
        id: "c2",
        title: "Отель «Гранд Будапешт»",
        rating: 7.9,
        kind: "Фильм",
        genres: "Комедия, криминал",
        poster: catalogPosters[1],
      },
      {
        id: "c3",
        title: "Безумно богатые азиаты",
        rating: 7.3,
        kind: "Фильм",
        genres: "Мелодрама, комедия",
        poster: catalogPosters[2],
      },
      {
        id: "c4",
        title: "Brassic",
        rating: 8.8,
        kind: "Сериал",
        genres: "Комедия",
        poster: catalogPosters[3],
      },
      {
        id: "c5",
        title: "Мальчишник в Вегасе",
        rating: 7.6,
        kind: "Фильм",
        genres: "Комедия",
        poster: catalogPosters[0],
      },
      {
        id: "c6",
        title: "1+1",
        rating: 8.8,
        kind: "Фильм",
        genres: "Комедия, драма",
        poster: catalogPosters[1],
      },
      {
        id: "c7",
        title: "Офис",
        rating: 8.5,
        kind: "Сериал",
        genres: "Комедия",
        poster: catalogPosters[2],
      },
      {
        id: "c8",
        title: "Джентльмены",
        rating: 8.5,
        kind: "Фильм",
        genres: "Комедия, криминал",
        poster: catalogPosters[3],
      },
    ],
  },
  {
    id: "dramas",
    title: "Драмы",
    items: [
      {
        id: "d1",
        title: "Зелёная миля",
        rating: 9.1,
        kind: "Фильм",
        genres: "Драма",
        poster: catalogPosters[1],
      },
      {
        id: "d2",
        title: "Побег из Шоушенка",
        rating: 9.1,
        kind: "Фильм",
        genres: "Драма",
        poster: catalogPosters[2],
      },
      {
        id: "d3",
        title: "Форрест Гамп",
        rating: 8.9,
        kind: "Фильм",
        genres: "Драма, мелодрама",
        poster: catalogPosters[0],
      },
      {
        id: "d4",
        title: "Очень странные дела",
        rating: 8.4,
        kind: "Сериал",
        genres: "Драма, фантастика",
        poster: catalogPosters[3],
      },
      {
        id: "d5",
        title: "1+1",
        rating: 8.8,
        kind: "Фильм",
        genres: "Драма, комедия",
        poster: catalogPosters[1],
      },
      {
        id: "d6",
        title: "Престиж",
        rating: 8.5,
        kind: "Фильм",
        genres: "Драма, триллер",
        poster: catalogPosters[2],
      },
    ],
  },
  {
    id: "fantasy",
    title: "Фэнтези",
    items: [
      {
        id: "f1",
        title: "Властелин колец",
        rating: 8.6,
        kind: "Фильм",
        genres: "Фэнтези, приключения",
        poster: catalogPosters[3],
      },
      {
        id: "f2",
        title: "Гарри Поттер",
        rating: 8.2,
        kind: "Фильм",
        genres: "Фэнтези",
        poster: catalogPosters[0],
      },
      {
        id: "f3",
        title: "Игра престолов",
        rating: 9.0,
        kind: "Сериал",
        genres: "Фэнтези, драма",
        poster: catalogPosters[1],
      },
      {
        id: "f4",
        title: "Ведьмак",
        rating: 7.3,
        kind: "Сериал",
        genres: "Фэнтези",
        poster: catalogPosters[2],
      },
      {
        id: "f5",
        title: "Хроники Нарнии",
        rating: 7.1,
        kind: "Фильм",
        genres: "Фэнтези, семейный",
        poster: catalogPosters[3],
      },
      {
        id: "f6",
        title: "Аватар",
        rating: 7.9,
        kind: "Фильм",
        genres: "Фэнтези, фантастика",
        poster: catalogPosters[0],
      },
    ],
  },
  {
    id: "thrillers",
    title: "Триллеры",
    items: [
      {
        id: "t1",
        title: "Исчезнувшая",
        rating: 8.1,
        kind: "Фильм",
        genres: "Триллер, драма",
        poster: catalogPosters[2],
      },
      {
        id: "t2",
        title: "Остров проклятых",
        rating: 8.5,
        kind: "Фильм",
        genres: "Триллер, детектив",
        poster: catalogPosters[1],
      },
      {
        id: "t3",
        title: "Джокер",
        rating: 8.0,
        kind: "Фильм",
        genres: "Триллер, драма",
        poster: catalogPosters[0],
      },
      {
        id: "t4",
        title: "Настоящий детектив",
        rating: 8.9,
        kind: "Сериал",
        genres: "Триллер, детектив",
        poster: catalogPosters[3],
      },
      {
        id: "t5",
        title: "Семь",
        rating: 8.6,
        kind: "Фильм",
        genres: "Триллер, криминал",
        poster: catalogPosters[2],
      },
      {
        id: "t6",
        title: "Молчание ягнят",
        rating: 8.3,
        kind: "Фильм",
        genres: "Триллер, детектив",
        poster: catalogPosters[1],
      },
    ],
  },
  {
    id: "detectives",
    title: "Детективы",
    items: [
      {
        id: "dt1",
        title: "Шерлок",
        rating: 8.9,
        kind: "Сериал",
        genres: "Детектив, криминал",
        poster: catalogPosters[3],
      },
      {
        id: "dt2",
        title: "Убийство в Восточном экспрессе",
        rating: 6.6,
        kind: "Фильм",
        genres: "Детектив",
        poster: catalogPosters[0],
      },
      {
        id: "dt3",
        title: "Девушка с татуировкой дракона",
        rating: 7.8,
        kind: "Фильм",
        genres: "Детектив, триллер",
        poster: catalogPosters[1],
      },
      {
        id: "dt4",
        title: "Настоящий детектив",
        rating: 8.9,
        kind: "Сериал",
        genres: "Детектив, драма",
        poster: catalogPosters[2],
      },
      {
        id: "dt5",
        title: "Достать ножи",
        rating: 7.9,
        kind: "Фильм",
        genres: "Детектив, комедия",
        poster: catalogPosters[3],
      },
      {
        id: "dt6",
        title: "Зодчие",
        rating: 7.2,
        kind: "Сериал",
        genres: "Детектив",
        poster: catalogPosters[0],
      },
    ],
  },
];

export const COLLECTIONS: Collection[] = [
  { id: "comics", title: "Любителям комиксов", image: firstCard },
  { id: "fantasy-classics", title: "Классика фэнтези", image: thirdCard },
  { id: "anime", title: "Японские мультфильмы", image: comedyPool },
  { id: "satire", title: "Сатирические мультсериалы", image: secondCard },
  { id: "crime", title: "Криминальная классика", image: comedyBudapest },
  { id: "british", title: "Британский юмор", image: comedyBrassic },
];
