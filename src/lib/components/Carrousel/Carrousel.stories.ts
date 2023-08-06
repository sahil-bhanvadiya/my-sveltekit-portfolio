import type { Meta, StoryObj } from '@storybook/svelte';

import Carrousel from './Carrousel.svelte';
import MY_SKILLS from '../../skills.params';

const meta = {
    title: 'Components/Carrousel',
    component: Carrousel,
    tags: ['autodocs'],
} satisfies Meta<Carrousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: MY_SKILLS,
    },
};