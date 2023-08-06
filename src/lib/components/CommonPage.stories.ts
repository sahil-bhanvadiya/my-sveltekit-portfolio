import type { Meta, StoryObj } from '@storybook/svelte';

import CommonPage from './CommonPage.svelte';

const meta = {
    title: 'Components/CommonPage',
    component: CommonPage,
    tags: ['autodocs'],
} satisfies Meta<CommonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'title',
    },
};