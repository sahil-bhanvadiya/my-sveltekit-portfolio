import type { Meta, StoryObj } from '@storybook/svelte';

import CardDivider from './CardDivider.svelte';

const meta = {
	title: 'Components/Card/CardDivider',
	component: CardDivider,
	tags: ['autodocs']
} satisfies Meta<CardDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
