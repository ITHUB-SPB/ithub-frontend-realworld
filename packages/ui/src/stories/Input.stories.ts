import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from '../components/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'This is text'
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {};

