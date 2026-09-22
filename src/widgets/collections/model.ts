export type Collection = {
  id: string;
  title: string;
  image: string;
};

export const COLLECTION_QUERIES = [
  { id: "comics", title: "Любителям комиксов", query: "Мстители" },
  { id: "fantasy-classics", title: "Классика фэнтези", query: "Властелин колец" },
  { id: "anime", title: "Японские мультфильмы", query: "Покемон" },
  { id: "satire", title: "Сатирические мультсериалы", query: "Шрек" },
  { id: "crime", title: "Криминальная классика", query: "Крёстный отец" },
  { id: "british", title: "Британский юмор", query: "Бриджет Джонс" },
];
