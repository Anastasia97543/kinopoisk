import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "shared/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Короткая подпись на постере. Текст передаётся в children. Тип задаёт проп type: premiere — красная «Премьера», soon — серая «Скоро». По умолчанию premiere.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["premiere", "soon"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Premiere: Story = {
  args: {
    children: "Премьера",
    type: "premiere",
  },
};

export const Soon: Story = {
  args: {
    children: "Скоро",
    type: "soon",
  },
};
