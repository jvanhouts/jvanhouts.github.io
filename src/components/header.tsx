export function Header() {
	return (
		<header className="w-full max-w-4xl px-8 pt-6 lg:px-0">
			<nav
				className="flex w-fit items-center gap-1 rounded-full border border-accent/10 bg-background p-1 text-lg font-semibold shadow-sm"
				aria-label="Primary"
				style={{ boxShadow: '0px 0px 3px rgba(18, 91, 0, 0.2)' }}
			>
				<a
					href="/"
					className="rounded-full bg-accent px-6 py-2 text-background text-opacity-100 shadow-sm transition-colors"
					aria-current="page"
				>
					Website
				</a>
				<a
					href="#"
					className="relative rounded-full px-6 py-2 text-accent text-opacity-30 transition-colors cursor-default"
					aria-disabled="true"
				>
					Blog
					<span className="text-sm text-[#179299]/50 font-bold tracking-tight ml-2 bg-[#179299]/5 rounded-full px-2 py-1 border border-[#179299]/20">Soon™</span>
				</a>
			</nav>
		</header>
	);
}
