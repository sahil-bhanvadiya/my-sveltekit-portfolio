import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-portfolio-svelte',
		color: '#5e95e3',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/sahil-bhanvadiya/my-sveltekit-portfolio', label: 'GitHub' }],
		logo: 'svelte',
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'js', 'storybook', 'sass', 'html', 'ts', 'tailwind'),
		type: 'Personal Portfolio'
	},
	{
		slug: 'case-converter',
		color: '#ff3e00',
		description:
			'Case Converter is a word counter and a character counting utility which can be used to manipulate your text in the way you want.',
		links: [{ to: 'https://github.com/sahil-bhanvadiya/case-converter', label: 'GitHub' }],
		logo: 'react',
		name: 'Case Converter',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js', 'reactjs'),
		type: 'Hobby Website'
	},
	{
		slug: 'react-redux-ts-ag-grid',
		color: '#ff3e00',
		description:
			'Template of React.js modal/dialog using without any dependencies.',
		links: [{ to: 'https://ctg4zp.csb.app/', label: 'codesandbox' }],
		logo: 'ts',
		name: 'React Redux Ag-grid POC',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js', 'ts', 'redux', 'reactjs'),
		type: 'Component Template'
	},
	{
		slug: 'react-reuseable-modal',
		color: '#ff3e00',
		description:
			'Template of React.js modal/dialog using without any dependencies.',
		links: [{ to: 'https://stackblitz.com/edit/react-icycfx?file=src%2FApp.js', label: 'StackBlitz' }],
		logo: 'react',
		name: 'React Reusable Modal/Dialog Without Dependencies',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js', 'reactjs'),
		type: 'Component Template'
	},
	{
		slug: 'react-dynamic-form-fields',
		color: '#ff3e00',
		description:
			'Dynamically add or remove input/form fields in react.js , next.js raw logic..',
		links: [{ to: 'https://codesandbox.io/s/add-remove-form-field-react-lt7euv', label: 'Codesandbox' }],
		logo: 'nextjs',
		name: 'React Dynamic Form Fields',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js', 'reactjs', 'nextjs'),
		type: 'Component Template'
	},
	{
		slug: 'my-portfolio-react',
		color: '#5e95e3',
		description:
			'A personal portfolio for showcase skills.',
		links: [{ to: 'https://github.com/sahil-bhanvadiya/myportfolio', label: 'GitHub' }],
		logo: 'react',
		name: 'My Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js', 'reactjs'),
		type: 'Personal Portfolio'
	},
];

export default MY_PROJECTS;
