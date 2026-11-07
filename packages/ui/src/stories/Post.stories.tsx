import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Post from '../components/post';

const meta = {
  title: 'UI/Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    author: {
      avatar: "/images/default.png",
      fullname: "John Lobster"
    },
    title: "This is text",
    content: "This is text",
    tags: ['tag', 'tag'],
    favoriteCount: 64,
    favorited: false,
    handleFavorite: fn()
  },
  render: (props) => {
    const [currentFavoritedCount, setFavoritedCount] = useState(props.favoriteCount)
    const [currentFavorited, setFavorited] = useState(props.favorited)

    const handleClick = () => {
      setFavoritedCount(state => currentFavorited ? state - 1 : state + 1)
      setFavorited(state => !state)
    }

    return (
      <Post {...props} favoriteCount={currentFavoritedCount} favorited={currentFavorited} handleFavorite={handleClick} />
    )
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Favorited: Story = {
  args: {
    favorited: true
  },
};