import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function Contact() {
	return (
		<div className="sm:ml-12 mb-8">
			<p className="text-accent/80 text-sm tracking-tight mt-4 font-medium">check out more of my projects:</p>
			<a
				href="https://github.com/jvanhouts"
				target="_blank"
				rel="noopener noreferrer"
				className="flex justify-between items-center gap-2 w-fit border border-primary/10 shadow-sm bg-card-background/30 hover:bg-primary/10 transition-all duration-200 px-4 py-1 rounded-lg group hover:cursor-pointer mt-4 max-w-2xl text-primary/70 tracking-tight text-sm"
			>
				<GithubIcon className="w-4 h-4" />
				<span className="sm:text-md ml-4">github.com/jvanhouts</span>
				<ExternalLinkIcon className="w-3 h-3 ml-4" />
			</a>
		</div>
	);
}
