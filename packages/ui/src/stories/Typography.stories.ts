import type { Meta, StoryObj } from '@storybook/react-vite';

import Typography from '../components/typography';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text: 'This is text'
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
  },
};

export const RegularGray: Story = {
  args: {
    variant: "regular-gray",
  },
};
