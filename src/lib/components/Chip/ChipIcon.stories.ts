import type { Meta, StoryObj } from '@storybook/svelte';

import ChipIcon from './ChipIcon.svelte';

const meta = {
	title: 'Components/Chip/ChipIcon',
	component: ChipIcon,
	tags: ['autodocs'],
	argTypes: {
		inverted: {
			options: [true, false],
			control: { type: 'radio' }
		},
		grayscale: {
			options: [true, false],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<ChipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'title',
		logo: 'https://fastly.picsum.photos/id/826/536/354.jpg?hmac=GfHRp7W_M8FlthsOpkoFRGu-mt_d2U6g0_mtQjpx6d0',
		inverted: false,
		grayscale: true
	}
};
