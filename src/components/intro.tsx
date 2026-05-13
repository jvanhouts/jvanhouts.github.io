import { Sparkle } from 'lucide-react';

export function Intro() {
	return (
		<>
			<div className="flex items-center gap-2 relative">
				<img
					src="https://github.com/jvanhouts.png"
					alt="Akiba"
					className="h-32 w-32 rounded-full object-cover"
				/>
				<Sparkle className="h-4 w-4 text-[#c8f6eb] absolute left-32 top-24" fill="currentColor" />
				<Sparkle className="h-4 w-4 text-[#fdd6e0] absolute left-[9.25rem] top-[4.75rem]" fill="currentColor" />
			</div>
			<p className="mt-8 text-xl">
				I'm a full-stack developer with a passion for building things!!
			</p>
			<p className="mt-4 text-xl text-accent/70">
				When not behind my macbook, I'm usually busy with:
			</p>
		</>
	);
}
