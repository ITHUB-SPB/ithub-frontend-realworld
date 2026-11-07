import type { Meta, StoryObj } from '@storybook/react-vite';

import Form from '../components/form';
import Input from '../components/input';
import Typography from '../components/typography';

const meta = {
  title: 'UI/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {

  },
  render: (props) => {
    return (
      <Form {...props} header={<Typography variant='h2' text='Sign In' />}>
        <Input placeholder='Login' />
        <Input placeholder='Password' type="password" />
      </Form>
    )
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};