import { useState } from 'react';
import { LucideX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { HobbyLabel } from './hobby-link';
import { cn } from '../lib/cva.config';

const hobbies = [
	{ hobby: 'Cosplay', emoji: '🎭', className: 'bg-[#dc8a78]/5 text-[#dc8a78]' },
	{ hobby: '3D printing', emoji: '🎭', className: 'bg-[#8839ef]/5 text-[#8839ef]' },
	{ hobby: 'Cooking', emoji: '🍳', className: 'bg-[#df8e1d]/5 text-[#df8e1d]' },
	{ hobby: 'Baking', emoji: '🧁', className: 'bg-[#7287fd]/5 text-[#7287fd]' },
	{ hobby: 'Airsoft', emoji: '🎯', className: 'bg-[#179299]/5 text-[#179299]' }
];

export function Hobby() {
	const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
	const selectedHobbyData = hobbies.find((hobby) => hobby.hobby === selectedHobby);

	return (
		<div className="relative mt-8 min-h-44">
			<motion.div
				className="flex flex-wrap gap-2 max-w-2xl"
				animate={{
					filter: selectedHobby ? 'blur(4px)' : 'blur(0px)',
					opacity: selectedHobby ? 0.45 : 1,
					y: selectedHobby ? -6 : 0
				}}
				transition={{ duration: 0.22 }}
			>
				{hobbies.map((hobby) => (
					<motion.div
						key={hobby.hobby}
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<HobbyLabel
							hobby={hobby.hobby}
							emoji={hobby.emoji}
							className={hobby.className}
							onClick={() => setSelectedHobby(hobby.hobby)}
						/>
					</motion.div>
				))}
			</motion.div>

			<AnimatePresence>
				{selectedHobbyData ? (
					<>
						<motion.button
							type="button"
							aria-label="Close hobby detail"
							className="absolute inset-x-0 top-0 z-10 h-full cursor-default"
							onClick={() => setSelectedHobby(null)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.18 }}
						/>
						<motion.div
							key="hobby-detail"
							className="absolute left-0 right-0 top-7 z-20 rounded-2xl border border-accent/10 bg-background/95 p-4 pt-6 shadow-xl backdrop-blur"
							initial={{ opacity: 0, y: 18, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 10, scale: 0.97 }}
							transition={{ duration: 0.24, ease: 'easeOut' }}
							onClick={(event) => event.stopPropagation()}
						>
							<div className="flex justify-between items-center">
								<h2
									className={cn(
										'inline-block rounded-lg p-1 text-xl font-bold',
										selectedHobbyData.className
									)}
								>
									{selectedHobbyData.emoji} {selectedHobbyData.hobby}
								</h2>
								<button
									type="button"
									className="flex items-center text-sm font-semibold text-accent/70 hover:text-accent"
									onClick={() => setSelectedHobby(null)}
								>
									<LucideX className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<p className="text-sm leading-6 text-accent/80 mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
								eros elementum tristique.
							</p>
						</motion.div>
					</>
				) : null}
			</AnimatePresence>
		</div>
	);
}
