import { Sparkle } from 'lucide-react';

export function Intro() {
	return (
		<>
			<div className="flex sm:flex-row flex-col items sm:items-end justify-start gap-2 relative mt-8">
				<img
					src="https://github.com/jvanhouts.png"
					alt="Jess"
					className="h-32 w-32 rounded-full object-cover border-4 border-primary/10 mb-4 sm:mb-14"
				/>
				<Sparkle className="h-4 w-4 text-[#91edd8] absolute left-32 top-24" fill="currentColor" />
				<Sparkle
					className="h-4 w-4 text-[#fcb6c7] absolute left-[8.5rem] top-[4.5rem]"
					fill="currentColor"
				/>
				<div className="flex flex-col gap-4 sm:ml-8 sm:mb-16">
				<h1 className="text-3xl max-w-lg tracking-tight leading-10">I build things; software at work, cosplay swords and cinnamon rolls at home.</h1>
				<p className="text-xl text-accent/80 font-semibold sm:absolute sm:bottom-0 sm:left-8">
					when not behind my 💻, I keep myself busy with:
				</p>
				</div>
			</div>
		</>
	);
}
