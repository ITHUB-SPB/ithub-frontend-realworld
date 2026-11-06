import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
    label: 'Button'
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: "primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    kind: "primary",
    size: "large",
  },
};

export const Outlined: Story = {
  args: {
    kind: 'outlined',
  },
};

export const OutlinedLarge: Story = {
  args: {
    kind: 'outlined',
    size: 'large',
  },
};

/** Danger и DangerLarge оставляю на КТ */