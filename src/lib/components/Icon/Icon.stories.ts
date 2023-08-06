import type { Meta, StoryObj } from '@storybook/svelte';

import Icon from './Icon.svelte';
import { Icons } from '../../utils';

const meta = {
    title: 'Components/Icon/Icon',
    component: Icon,
    tags: ['autodocs'],
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'red',
        size: '30px',
        icon: Icons.Skills
    },
};