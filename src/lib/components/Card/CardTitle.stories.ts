import type { Meta, StoryObj } from '@storybook/svelte';

import CardTitle from './CardTitle.svelte';

const meta = {
    title: 'Components/Card/CardTitle',
    component: CardTitle,
    tags: ['autodocs'],
} satisfies Meta<CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test Title'
    },
};