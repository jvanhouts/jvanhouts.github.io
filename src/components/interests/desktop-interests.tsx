import { useState } from 'react';
import { LucideX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../../lib/cva.config';
import { InterestContent, interests, type Interest } from './interest-data';
import { InterestPills } from './interest-pills';

export function DesktopInterests() {
	const [selectedInterest, setSelectedInterest] = useState<Interest['id'] | null>(null);
	const selectedInterestData = interests.find((interest) => interest.id === selectedInterest);

	return (
		<div className="relative mt-8 mb-8 hidden sm:block">
			<div className="absolute w-4 h-[30rem] rounded-tl-3xl -top-[2.9rem] flex items-end justify-end border-t-[0.2rem] border-l-[0.2rem] border-dashed border-rosewater/20">
				<span className="block absolute -right-3 -top-[0.50rem] w-3 h-3 bg-rosewater rounded-full"></span>
				<span className="block absolute -left-2 top-[11.35rem] w-3 h-3 bg-teal rounded-full"></span>
			</div>
			<motion.div
				animate={{
					filter: selectedInterest ? 'blur(4px)' : 'blur(0px)',
					opacity: selectedInterest ? 0.45 : 1,
					y: selectedInterest ? -6 : 0
				}}
				transition={{ duration: 0.22 }}
			>
				<InterestPills onSelect={setSelectedInterest} />
			</motion.div>

			<AnimatePresence>
				{selectedInterestData ? (
					<>
						<motion.button
							type="button"
							aria-label="Close interest detail"
							className="absolute inset-x-0 top-0 z-10 h-full cursor-default"
							onClick={() => setSelectedInterest(null)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.18 }}
						/>
						<motion.div
							key="interest-detail"
							className="absolute left-0 right-0 top-7 z-20 rounded-2xl border border-accent/10 bg-background/95 p-4 pt-6 shadow-xl backdrop-blur"
							initial={{ opacity: 0, y: 18, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 10, scale: 0.97 }}
							transition={{ duration: 0.24, ease: 'easeOut' }}
							onClick={(event) => event.stopPropagation()}
						>
							<div className="flex items-center justify-between">
								<h2
									className={cn(
										'inline-flex items-center gap-2 rounded-lg p-1 text-xl font-bold',
										selectedInterestData.className
									)}
								>
									<img
										src={selectedInterestData.iconSrc}
										alt=""
										className="h-6 w-6 rounded-sm object-cover"
										aria-hidden="true"
									/>
									{selectedInterestData.label}
								</h2>
								<button
									type="button"
									className="flex items-center text-sm font-semibold text-accent/70 hover:text-accent"
									onClick={() => setSelectedInterest(null)}
								>
									<LucideX className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<InterestContent id={selectedInterestData.id} />
						</motion.div>
					</>
				) : null}
			</AnimatePresence>
		</div>
	);
}
