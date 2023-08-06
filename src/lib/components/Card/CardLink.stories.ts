import type { Meta, StoryObj } from '@storybook/svelte';

import CardLink from './CardLink.svelte';

const meta = {
	title: 'Components/Card/CardLink',
	component: CardLink,
	tags: ['autodocs']
} satisfies Meta<CardLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Demo Label',
		to: '/'
	}
};
