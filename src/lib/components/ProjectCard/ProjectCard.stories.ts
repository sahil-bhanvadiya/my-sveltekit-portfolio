import type { Meta, StoryObj } from '@storybook/svelte';

import ProjectCard from './ProjectCard.svelte';
import MY_PROJECTS from '../../projects.params';

const meta = {
    title: 'Components/ProjectCard/ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'],
} satisfies Meta<ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        project: MY_PROJECTS[0],
    },
};