import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = "Sahil's Portfolio";

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Sahil',
	lastName: 'Bhanvadiya',
	description:
		'In the vast realm of web development, I am a passionate dream-weaver, seamlessly weaving together front-end and back-end technologies. Utilizing bleeding-edge technologies, I craft immersive digital experiences. Collaborating with fellow developers, I pour my heart into every aspect, creating seamless and captivating web applications.',
	links: [
		{
			platform: Platform.GitHub,
			link: 'https://github.com/sahil-bhanvadiya/'
		},
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/sahil-bhanvadiya/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/sahil_bhanvadia/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/22149156/sahil-bhanvadiya/'
		},
		{
			platform: Platform.Email,
			link: 'sahil.bhanvadiya.dev@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
