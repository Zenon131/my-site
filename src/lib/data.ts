export interface Project {
	name: string;
	description: string;
	url: string;
	language?: string;
	stars?: number;
	featured?: boolean;
}

export interface BlogPost {
	title: string;
	date: string;
	excerpt: string;
	slug: string;
	content: string;
}

export const user = {
	name: 'Jonathan Wallace',
	username: 'Zenon131',
	avatar: 'https://avatars.githubusercontent.com/u/95895370?v=4',
	bio: 'Bioengineering student at the University of Pennsylvania! Interested in AI/ML, neuroscience, and prosthetics. Also enjoy web/app dev.',
	website: 'www.engramartificial.com',
	github: 'https://github.com/Zenon131',
	email: 'jonozw@seas.upenn.edu',
	location: 'Philadelphia, PA',
	joined: 'December 2021'
};

export const projects: Project[] = [
	{
		name: 'neuro-search',
		description: 'A semantic neural search engine',
		url: 'https://github.com/Zenon131/neuro-search',
		language: 'Svelte'
	},
	{
		name: 'vectorfin',
		description: 'Multimodal financial model',
		url: 'https://github.com/Zenon131/vectorfin',
		language: 'Python'
	},
	{
		name: 'claire-webtool',
		description: 'Web tool interface for Claire AI',
		url: 'https://github.com/Zenon131/claire-webtool',
		language: 'TypeScript',
		stars: 3
	},
	{
		name: 'bulletin',
		description: 'Announcement board social application',
		url: 'https://github.com/Zenon131/bulletin',
		language: 'TypeScript'
	},
	{
		name: 'healthhacks',
		description: 'Healthcare hackathon project',
		url: 'https://github.com/Zenon131/healthhacks',
		language: 'C++'
	}
];

export const blogPosts: BlogPost[] = [
	{
		title: 'The Pitch by Deel',
		date: '2026-05-05',
		excerpt:
			'I recently got the opportunity to attend The Pitch by Deel, hosted and presented by JP Morgan in New York City. I was able to pitch my venture, Engram, to a slew of investors and stakeholders and received positive feedback.',
		slug: 'the-pitch-by-deel',
		content: `<p>I recently got the opportunity to attend The Pitch by Deel, hosted and presented by JP Morgan in New York City. I was able to pitch my venture, Engram, to a slew of investors and stakeholders and received positive feedback, including 2 very interested investors.</p>
<p>This was an incredible experience to network with other founders, learn from experienced investors, and practice pitching in a high-stakes environment. Looking forward to following up with the investors who expressed interest.</p>`
	},
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}
