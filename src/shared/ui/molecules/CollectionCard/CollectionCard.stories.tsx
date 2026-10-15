import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/collections/comics.png";
import { CollectionCard } from "./CollectionCard";

const meta = {
  title: "shared/CollectionCard",
  component: CollectionCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Карточка подборки: название поверх картинки. Пустая строка в image оставляет серую плашку.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    title: "Любителям комиксов",
    image,
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Любителям комиксов",
    image: "",
  },
};
