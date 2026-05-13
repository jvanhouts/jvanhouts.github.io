import { Sparkle } from 'lucide-react';

export function Intro() {
	return (
		<>
			<div className="flex sm:flex-row flex-col items-center sm:items-end justify-start gap-2 relative">
				<img
					src="https://github.com/jvanhouts.png"
					alt="Akiba"
					className="h-32 w-32 rounded-full object-cover border-4 border-primary/10"
				/>
				<Sparkle className="h-4 w-4 text-[#91edd8] absolute left-32 top-24" fill="currentColor" />
				<Sparkle
					className="h-4 w-4 text-[#fcb6c7] absolute left-[8.75rem] top-[4.5rem]"
					fill="currentColor"
				/>
				<div className="flex flex-col gap-4 sm:ml-8">
				<h1 className="text-3xl max-w-lg tracking-tight">I'm a full-stack developer with a passion for building things!!</h1>
				<p className="text-xl tracking-tight text-accent/80">
					When not behind my macbook, I'm usually busy with:
				</p>
				</div>
			</div>
		</>
	);
}
