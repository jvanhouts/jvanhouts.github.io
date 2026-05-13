import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function Contact() {
	return (
		<div className="sm:ml-8 mb-8">
		<p className="text-accent/80 text-sm mt-4">check out more of my projects:</p>
		<a href="https://github.com/jvanhouts" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-2 w-fit border border-primary/10 shadow-sm bg-primary/50 hover:bg-primary/10 transition-all duration-200 px-2 rounded-lg group hover:cursor-pointer mt-1.5 max-w-2xl">
			<div className="flex items-center">
				<div className="py-1.5 pr-2">
					<GithubIcon className="w-4 h-4 text-primary-foreground"/>
				</div>
				<span className="sm:text-md text-primary-foreground border-l border-primary/10 pl-2 font-medium">github.com/jvanhouts</span>
			</div>
      <ExternalLinkIcon className="w-4 h-4 mt-0.5 text-primary group-hover:translate-x-2 transition-all duration-200 ml-3"/>  
		</a>
		</div>
	);
}
