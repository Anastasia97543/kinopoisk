export type FooterLink = {
  label: string;
  href: string;
  icon?: "phone" | "mail";
};

export type FooterSocial = {
  id: string;
  href: string;
  label: string;
  icon: "facebook" | "vk" | "instagram";
};

export type FooterGroup = {
  title: string;
  href?: string;
  links: FooterLink[];
  socials?: FooterSocial[];
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
          { label: "8 800 800 80 80", href: "tel:88008008080", icon: "phone" },
          { label: "support@mail.ru", href: "mailto:support@mail.ru", icon: "mail" },
        ],
      },
      {
        title: "Подписывайтесь на нас",
        links: [],
        socials: [
          { id: "facebook", href: "#", label: "Facebook", icon: "facebook" },
          { id: "vk", href: "#", label: "ВКонтакте", icon: "vk" },
          { id: "instagram", href: "#", label: "Instagram", icon: "instagram" },
        ],
      },
    ],
  },
];
