import { MoveDownLeft, Sparkle } from 'lucide-react';

export function Intro() {
	return (
		<>
			<div className="flex sm:flex-row flex-col items sm:items-end justify-start gap-2 relative mt-8">
				<div>
					<img
						src="https://github.com/jvanhouts.png"
						alt="Jess"
						className="sm:h-36 sm:w-36 h-32 w-32 rounded-full object-cover border-4 border-primary/10 mb-6 sm:mb-20"
					/>
				</div>
				<Sparkle
					className="h-4 w-4 text-[#91edd8] absolute left-[7.5rem] top-[6.75rem]"
					fill="currentColor"
				/>
				<Sparkle
					className="h-4 w-4 text-[#fcb6c7] absolute left-[8.5rem] top-[5.5rem]"
					fill="currentColor"
				/>
				<div className="flex flex-col gap-4 sm:ml-4 sm:mb-16">
					<span className="absolute text-sm left-38 top-[8.75rem] sm:top-5 bg-yellow/10 px-2 sm:px-4 sm:py-1 rounded-full">
						hi, im <span className="text-yellow font-medium">jess!</span>
					</span>
					<h1 className="sm:text-4xl max-w-lg tracking-tight leading-tight mt-0 sm:mt-12">
						I build things; software at work, cosplay swords and cinnamon rolls at home.
					</h1>
					<h2 className="text-lg text-accent/70 tracking-tighter leading-tight font-medium sm:absolute sm:bottom-[1.25rem] sm:left-12">
						when not behind my 💻, i keep myself busy with
					</h2>
				</div>
			</div>
		</>
	);
}
