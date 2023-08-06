import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
    title: 'Components/Input/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Example Value',
        placeholder: 'Placeholder',
    },
};