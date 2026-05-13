import { ArrowRight, Github } from 'lucide-react';
import GameCharacterImage from '../lib/assets/game_character.png';

const projects = [
	{
		title: 'Unoty',
		description:
			'A game engine built with c++ (SDL, Box2D), with an API familiar to Unity developers!',
		href: 'https://github.com/school-projects-gwb/unoty/',
		icon: <span className="text-4xl font-semibold">U</span>
	},
	{
		title: 'Slime Shooter',
		description: 'A top-down shooter game built with Unity. Assets are all hand-made!',
		href: 'https://simmer.io/@gunwunbun/slimeshooter',
		icon: (
			<img
				src={GameCharacterImage}
				alt="Slime Shooter sprite van het hoofdkarakter; een meisje met blauw haar en een paarse outfit"
			/>
		)
	},
	{
		title: 'GitHub',
		description: 'My public code & projects',
		href: 'https://github.com/jvanhouts',
		icon: <Github size={40} aria-hidden="true" />
	}
];

export function Showcase() {
	return (
		<>
			<h1>Some stuff I made</h1>
			{projects.map((project) => (
				<div className="ml-3 mt-12 flex" key={project.title}>
					<div className="card card-shadow">
						<div className="card-shadow icon">{project.icon}</div>
						<div>
							<h2 className="title">{project.title}</h2>
							<p>{project.description}</p>
							<a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-block w-fit rounded-full bg-accent px-4 py-1 text-lg text-background duration-100
							hover:bg-accent hover:bg-opacity-75 hover:transition-colors">
								Go there<ArrowRight className="arrow mb-0.5 ml-2 inline" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
