import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import poster from "@/assets/catalog/budapest.png";
import { MovieCard } from "./MovieCard";

const meta = {
  title: "shared/MovieCard",
  component: MovieCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Карточка фильма в каталоге: постер, рейтинг, подпись и название. Ссылка задаётся пропом to. Пустая строка в poster оставляет серую плашку вместо картинки. Карточка внутри Link, поэтому в истории она обёрнута в MemoryRouter.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: 280 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPoster: Story = {
  args: {
    poster,
    title: "Отель «Гранд Будапешт»",
    rating: 8.1,
    caption: "Фильм • комедия, драма",
    to: "/movies/1",
  },
};

export const WithoutPoster: Story = {
  args: {
    poster: "",
    title: "Отель «Гранд Будапешт»",
    rating: 8.1,
    caption: "Фильм • комедия, драма",
    to: "/movies/1",
  },
};
