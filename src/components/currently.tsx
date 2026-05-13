const currentItems = [
	'Building an e-reading app',
	'Playing around with local LLMs',
	'Improving this portfolio'
];

export function Currently() {
	return (
		<section className="mt-8">
			<h2 className="text-xl font-bold tracking-relaxed text-primary/60">currently</h2>
			<div className="relative mt-4 min-h-80 overflow-hidden rounded-3xl border border-primary/10 shadow-sm">
				<img
					src="/images/akiba.jpeg"
					alt="Akiba"
					className="absolute inset-0 h-full w-full object-cover blur-sm"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/10" />
				<div className="relative z-10 flex flex-wrap gap-3 p-4 sm:p-6">
					{currentItems.map((item) => (
						<span
							key={item}
							className="rounded-full border border-white/40 bg-white/25 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-md"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
