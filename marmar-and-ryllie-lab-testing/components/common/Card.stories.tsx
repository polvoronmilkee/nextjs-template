import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Docs",
    content: "Find in-depth information about Next.js features and API.",
    href: "https://nextjs.org/docs",
  },
};

export const LongContent: Story = {
  args: {
    title: "Learning the advanced patterns of Storybook and Next.js",
    content: "This is a much longer description to see how the card handles text wrapping and maintain its layout when the container is restricted.",
    href: "#",
  },
};

export const Minimal: Story = {
  args: {
    title: "Small Card",
    content: "Just a tiny bit of text.",
    href: "#",
  },
};