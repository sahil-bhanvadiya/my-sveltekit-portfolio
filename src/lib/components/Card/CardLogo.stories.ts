import type { Meta, StoryObj } from '@storybook/svelte';

import CardLogo from './CardLogo.svelte';

const meta = {
	title: 'Components/Card/CardLogo',
	component: CardLogo,
	tags: ['autodocs']
} satisfies Meta<CardLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://fastly.picsum.photos/id/1080/536/354.jpg?hmac=PoiqwSy7rzSVpqW0WzMCCHofdlaYLlOe0P_drsj7krA',
		alt: 'alt',
		size: 200,
		radius: '5px',
		classes: ''
	}
};
