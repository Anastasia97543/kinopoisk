export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  href?: string;
  links: FooterLink[];
};

export type FooterColumn = {
  id: string;
  groups: FooterGroup[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "menu",
    groups: [
      {
        title: "Меню",
        links: [
          { label: "Фильмы", href: "#films" },
          { label: "Сериалы", href: "#series" },
          { label: "Подборки", href: "#collections" },
        ],
      },
      {
        title: "Подписка",
        links: [
          { label: "Тарифный план", href: "#plans" },
          { label: "Акции", href: "#discounts" },
          { label: "Подписка за баллы", href: "#" },
        ],
      },
    ],
  },
  {
    id: "catalog",
    groups: [
      {
        title: "Кино и сериалы",
        links: [
          { label: "Весь каталог", href: "#films" },
          { label: "Комедии", href: "#" },
          { label: "Драмы", href: "#" },
          { label: "Фэнтези", href: "#" },
          { label: "Триллеры", href: "#" },
          { label: "Детективы", href: "#" },
        ],
      },
    ],
  },
  {
    id: "partners",
    groups: [
      {
        title: "Сотрудничество",
        links: [
          { label: "Размещение рекламы", href: "#" },
          { label: "Партнерам", href: "#" },
          { label: "Партнерская программа", href: "#" },
          { label: "Пользовательское соглашение", href: "#" },
          { label: "Политика конфиденциальности", href: "#" },
        ],
      },
      {
        title: "Вопросы и ответы",
        href: "#faq",
        links: [],
      },
    ],
  },
  {
    id: "support",
    groups: [
      {
        title: "Техническая поддержка",
        links: [
          { label: "8 800 800 80 80", href: "tel:88008008080" },
          { label: "support@mail.ru", href: "mailto:support@mail.ru" },
        ],
      },
      {
        title: "Подписывайтесь на нас",
        links: [],
      },
    ],
  },
];
