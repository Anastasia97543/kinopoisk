import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка действия. Текст передаётся в children. Цвет задаёт проп color: accent — красная, muted — серая, ghost — прозрачная с белой обводкой. По умолчанию accent.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["accent", "muted", "ghost"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    children: "Смотреть",
    color: "accent",
  },
};

export const Muted: Story = {
  args: {
    children: "Смотреть",
    color: "muted",
  },
};

export const Ghost: Story = {
  args: {
    children: "Смотреть",
    color: "ghost",
  },
};
