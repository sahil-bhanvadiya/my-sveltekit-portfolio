import type { Meta, StoryObj } from '@storybook/svelte';

import SearchPage from './SearchPage.svelte';

const meta = {
	title: 'Components/SearchPage',
	component: SearchPage,
	tags: ['autodocs']
} satisfies Meta<SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Title',
		search: ''
	}
};
