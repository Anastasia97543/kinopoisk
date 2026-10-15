import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";

function Slide({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "grid",
        height: 180,
        placeItems: "center",
        borderRadius: 12,
        background: "var(--color-bg-elevated)",
        color: "var(--color-text)",
      }}
    >
      {title}
    </div>
  );
}

const slides = ["Фильм 1", "Фильм 2", "Фильм 3", "Фильм 4", "Фильм 5", "Фильм 6"];

const meta = {
  title: "shared/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Лента карточек. Стрелки зависят от положения: в начале скрыта «Назад», в конце скрыта «Дальше», посередине видны обе. Если слайдов не больше, чем slidesPerView, скрыты обе. Подписи кнопок задают prevLabel и nextLabel, в каталоге это «Назад: название ряда».",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 720, padding: "0 64px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    slidesPerView: { control: { type: "number", min: 1, max: 6 } },
    spaceBetween: { control: { type: "number", min: 0, max: 48 } },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CanScroll: Story = {
  args: {
    slidesPerView: 3,
    spaceBetween: 20,
    prevLabel: "Назад",
    nextLabel: "Дальше",
    children: slides.map((title) => <Slide key={title} title={title} />),
  },
};

export const Fits: Story = {
  args: {
    slidesPerView: 4,
    spaceBetween: 20,
    prevLabel: "Назад",
    nextLabel: "Дальше",
    children: slides.slice(0, 3).map((title) => <Slide key={title} title={title} />),
  },
};
