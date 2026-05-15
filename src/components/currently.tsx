import { cn } from '../lib/cva.config';

const currentItems = [
	{ text: 'building an e-reading app', className: 'bg-[#fdf1f4] sm:-rotate-3 border border-[#F8D7E0]/40', dotColor: 'bg-[#FFB3C1]' },
	{ text: 'applying local LLMs in my development workflow', className: 'bg-[#f6f2fe] sm:-rotate-3 sm:mb-16 border border-[#D7D2FF]/60', dotColor: 'bg-[#B3A7FF]' },
	{ text: '3d printing a huge cosplay sword', className: 'bg-[#f1f7f7] sm:rotate-3 border border-[#CDECE4]/60', dotColor: 'bg-[#64ceb4]' }
];

export function Currently() {
	return (
		<section className="mt-8">
			<div className="flex flex-col rounded-3xl border border-primary/10 shadow-sm pt-4 bg-card-background/30">
				<h2 className="text-lg font-semibold tracking-wider text-primary/50 ml-6">
					currently
				</h2>
				<div className="inset-0 z-10 flex flex-col sm:flex-row h-full w-full md:w-11/12 items-center justify-center gap-4 md:gap-10 p-4 mx-auto text-primary">
					{currentItems.map((item) => (
						<div
							key={item.text}
							className={cn(
								'rounded-3xl pl-3 pr-2 py-4 text-lg text-primary backdrop-blur-md flex flex-row items-start w-full sm:w-fit ',
								item.className
							)}
						>
							<div className="flex flex-row gap-1 mt-2.5 mr-2">
								<span className={cn("h-1.5 w-1.5 bg-primary rounded-full", item.dotColor)}></span>
								<span className={cn("h-1.5 w-1.5 bg-primary rounded-full opacity-70", item.dotColor)}></span>
								<span className={cn("h-1.5 w-1.5 bg-primary rounded-full opacity-50", item.dotColor)}></span>
							</div>
							<p className="leading-7">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
