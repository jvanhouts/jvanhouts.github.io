import { ChevronRight, ExternalLinkIcon } from 'lucide-react';

export function Contact() {
	return (
		<a href="https://github.com/jvanhouts" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-2 w-fit border border-accent/10 shadow-sm bg-card-background/30 hover:bg-primary/10 transition-all duration-200 px-2 rounded-3xl group hover:cursor-pointer mt-8 max-w-2xl">
			<div className="flex items-center gap-2">
				<div className="p-2">
					<img src="/images/icons/github.webp" alt="GitHub" className="h-10 sm:h-12" />
				</div>

				<h2 className="sm:text-md font-semibold text-primary">Check out my GitHub!</h2>
			</div>
      <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-all duration-200 sm:hidden"/>  
			<ExternalLinkIcon size={16} aria-hidden="true" />
			{/* <button className="bg-primary hidden sm:inline-flex text-primary-foreground rounded-xl items-center gap-2 px-4 py-2.5 group-hover:scale-105 group-hover:font-semibold transition-all duration-200">
				Take me there!
				<ExternalLinkIcon size={16} aria-hidden="true" />
			</button> */}
		</a>
	);
}
