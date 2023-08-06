import type { Meta, StoryObj } from '@storybook/svelte';

import Chip from './Chip.svelte';

const meta = {
    title: 'Components/Chip/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
        active: {
            options: [ true, false ],
            control: { type: 'radio' },
        },
        hoverable: {
            options: [ true, false ],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'title',
        size: 'auto',
        active: false,
        hoverable: true,
    },
};