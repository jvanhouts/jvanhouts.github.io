import { Sparkle } from 'lucide-react';

export function Intro() {
	return (
		<>
			<div className="flex items-end justify-start gap-2 relative">
				<img
					src="https://github.com/jvanhouts.png"
					alt="Akiba"
					className="h-32 w-32 rounded-full object-cover"
				/>
				<Sparkle className="h-4 w-4 text-[#c8f6eb] absolute left-32 top-24" fill="currentColor" />
				<Sparkle
					className="h-4 w-4 text-[#fdd6e0] absolute left-[8.75rem] top-[4.5rem]"
					fill="currentColor"
				/>
				<div className="flex flex-col gap-4 ml-8">
				<h1 className="text-3xl max-w-xl tracking-tight">I'm a full-stack developer with a passion for building things!!</h1>
				<p className="text-xl tracking-tight text-accent/80">
					When not behind my macbook, I'm usually busy with:
				</p>
				</div>
			</div>
		</>
	);
}
