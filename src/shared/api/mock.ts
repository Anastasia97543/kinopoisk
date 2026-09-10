import firstCard from "../../assets/cards/first-card.png";
import secondCard from "../../assets/cards/second-card.png";
import thirdCard from "../../assets/cards/third-card.png";
import avatarIcon from "../../assets/icons/avatar.png";
import ironManIcon from "../../assets/icons/iron-man.png";
import yodaIcon from "../../assets/icons/magistr-yoda.png";
import userNerdIcon from "../../assets/icons/user-nerds.png";
import comedyBaywatch from "../../assets/catalog/baywatch.png";
import comedyBudapest from "../../assets/catalog/budapest.png";
import comedyPool from "../../assets/catalog/pool.png";
import comedyBrassic from "../../assets/catalog/brassic.png";
import collectionComics from "../../assets/collections/comics.png";
import collectionClassics from "../../assets/collections/classics.png";
import collectionAnime from "../../assets/collections/anime.png";
import collectionSatire from "../../assets/collections/satire.png";
import collectionCrime from "../../assets/collections/crime.png";
import collectionFantasy from "../../assets/collections/fantasy.png";

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
    badgeType: "premiere" as const,
    date: "12 декабря",
    poster: firstCard,
  },
  {
    id: 2,
    title: "Мегамозг",
    subtitle: "Против Синдикат",
    badge: "Премьера",
    badgeType: "premiere" as const,
    date: "18 декабря",
    poster: secondCard,
  },
  {
    id: 3,
    title: "Однажды в лесу",
    subtitle: "Фильм Люка Жаке",
    badge: "Скоро",
    badgeType: "soon" as const,
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

const catalogPosters = [comedyBaywatch, comedyBudapest, comedyPool, comedyBrassic];

export const CATALOG = [
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

export const COLLECTIONS = [
  { id: "comics", title: "Любителям комиксов", image: collectionComics },
  { id: "fantasy-classics", title: "Классика фэнтези", image: collectionClassics },
  { id: "anime", title: "Японские мультфильмы", image: collectionAnime },
  { id: "satire", title: "Сатирические мультсериалы", image: collectionSatire },
  { id: "crime", title: "Криминальная классика", image: collectionCrime },
  { id: "british", title: "Британский юмор", image: collectionFantasy },
];

export const PLAN_FEATURES = [
  { id: "daily", label: "Кино и сериалы на каждый день" },
  { id: "hits", label: "Суперхиты" },
  { id: "kids", label: "Всё для детей" },
  { id: "edu", label: "Образовательные передачи" },
  { id: "partners", label: "Amediateka и Start" },
];

export const PLANS = [
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

export const DISCOUNTS = [
  {
    id: "activity",
    title: "Скидка 50% на активность в сервисе",
    paragraphs: [
      "Смотри кино, принимай участие в развитие сервиса: пиши рецензии, собирай подборки из фильмов и сериалов, проходи квизы.",
      "Копи баллы, и получай скидку 50% на любой тариф при следующей оплате подписки на КиноДом",
    ],
    buttonLabel: "Подробнее",
    buttonColor: "ghost" as const,
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
    buttonColor: "accent" as const,
    icon: yodaIcon,
  },
];
