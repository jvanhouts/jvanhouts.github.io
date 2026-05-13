import { useState } from 'react';
import { LucideChevronLeft } from 'lucide-react';
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
		<>
			<AnimatePresence mode="wait" initial={false}>
				{!selectedHobby ? (
					<motion.div
						key="hobby-overview"
						className="mt-4 flex flex-wrap gap-2"
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2 }}
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
				) : null}
			</AnimatePresence>

			<AnimatePresence>
				{selectedHobbyData ? (
					<motion.div
						key="hobby-detail"
						className="relative mt-8 rounded-2xl border border-accent/10 bg-background p-4 pt-8 shadow-sm"
						initial={{ opacity: 0, y: 10, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 8, scale: 0.98 }}
						transition={{ duration: 0.22 }}
					>
						<button
							type="button"
							className="flex items-center gap-1 text-sm font-semibold text-accent/70 hover:text-accent"
							onClick={() => setSelectedHobby(null)}
						>
							<LucideChevronLeft className="h-4 w-4" aria-hidden="true" />
							Back to hobbies
						</button>
						<h2
							className={cn(
								'mt-4 inline-block rounded-lg p-1 text-xl font-bold',
								selectedHobbyData.className
							)}
						>
							{selectedHobbyData.emoji} {selectedHobbyData.hobby}
						</h2>
						<p className="text-sm leading-6 text-accent/80">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
							in eros elementum tristique.
						</p>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	);
}
