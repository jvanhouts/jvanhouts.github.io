import '@fontsource-variable/figtree';
import '@fontsource/koulen';
import '@fontsource/koulen/400.css';
import '@fontsource/quicksand';
import '@fontsource/quicksand/500.css';
import { ArrowRight, Github } from 'lucide-react';
import GameCharacterImage from './lib/assets/game_character.png';

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
		description: 'Al mijn publiekelijk beschikbare code & projecten',
		href: 'https://github.com/jvanhouts',
		icon: <Github size={40} aria-hidden="true" />
	}
];

export default function App() {
	return (
		<main className="wrapper flex min-h-screen w-full flex-col items-center bg-white">
			<header className="site-header">
				<nav className="site-toggle" aria-label="Primary">
					<a href="/" className="site-toggle__item site-toggle__item--active" aria-current="page">
						Website
					</a>
					<a href="http://localhost:5174/" className="site-toggle__item">
						Blog
					</a>
				</nav>
			</header>

			<div className="flex h-screen w-full max-w-5xl flex-col gap-20 bg-white px-8 pt-10 lg:flex-row lg:px-0">
				<section className="w-full lg:w-5/12">
					<img
						src="https://github.com/jvanhouts.png"
						alt="Akiba"
						className="h-32 w-32 rounded-full object-cover"
					/>
					<p className="mt-8 text-xl">
						I'm a full-stack developer with a passion for building things!!
					</p>
				</section>

				<section className="w-full pb-8 lg:w-7/12 lg:pb-0">
					<h1>Some stuff I made</h1>
					{projects.map((project) => (
						<div className="ml-3 mt-12 flex" key={project.title}>
							<div className="card card-shadow">
								<div className="card-shadow icon">{project.icon}</div>
								<div>
									<h2 className="title">{project.title}</h2>
									<p>{project.description}</p>
									<a href={project.href} target="_blank" rel="noreferrer" className="button">
										Bekijken <ArrowRight className="arrow mb-0.5 ml-2 inline" aria-hidden="true" />
									</a>
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}
