export function Header() {
	return (
		<header className="w-full max-w-2xl px-8 pt-6 lg:px-0">
			<nav
				className="flex w-fit items-center gap-1 rounded-full border border-accent/10 bg-background p-1 text-sm font-semibold shadow-sm"
				aria-label="Primary"
				style={{ boxShadow: '0px 0px 3px rgba(18, 91, 0, 0.2)' }}
			>
				<a
					href="/"
					className="rounded-full bg-primary px-6 py-2 text-primary-foreground text-opacity-100 shadow-sm transition-colors"
					aria-current="page"
				>
					Website
				</a>
				<a
					href="#"
					className="relative rounded-full px-6 py-2 text-primary text-opacity-30 transition-colors cursor-default"
					aria-disabled="true"
				>
					Blog
					<span className="text-xs text-primary/40 tracking-tight ml-1 bg-primary/5 rounded-full px-1.5 italic">soon</span>
				</a>
			</nav>
		</header>
	);
}
