import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'software-engineer-seaflux',
		company: 'Seaflux',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date('2022-01-01') },
		skills: getSkills(
			'reactjs',
			'redux',
			'angular',
			'nextjs',
			'ts',
			'sass',
			'css',
			'html',
			'js',
			'aws',
			'git',
			'bootstrap',
			'mui',
			'node',
			'express',
			'postman',
			'jira'
		),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: 'seaflux'
	},
	{
		slug: 'web-developer-intern',
		company: 'CreArt Solutions',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2021-05-01'), to: new Date('2021-06-01') },
		skills: getSkills('css', 'html', 'js', 'reactjs'),
		name: 'Web Developer Internship',
		color: '#ffffff',
		links: [],
		logo: 'creart'
	}
];

export default MY_EXPERIENCES;
