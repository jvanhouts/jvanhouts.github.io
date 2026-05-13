import { useState } from 'react';
import { LucideX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../../lib/cva.config';
import { InterestLabel } from './interest-label';
import { CosplayInterestContent } from './content/cosplay';
import { PrintingInterestContent } from './content/printing';
import { AirsoftInterestContent } from './content/airsoft';
import { BakingInterestContent } from './content/baking';
import { CookingInterestContent } from './content/cooking';

type Interest = {
	id: 'cosplay' | 'printing' | 'cooking' | 'baking' | 'airsoft';
	label: string;
	iconSrc: string;
	className: string;
};

const interests: Interest[] = [
	{
		id: 'cosplay',
		label: 'Cosplay',
		iconSrc: '/images/icons/cosplay.png',
		className: 'bg-[#dc8a78]/5 text-[#dc8a78]'
	},
	{
		id: 'printing',
		label: '3D printing',
		iconSrc: '/images/icons/printing.png',
		className: 'bg-[#8839ef]/5 text-[#8839ef]'
	},
	{
		id: 'cooking',
		label: 'Cooking',
		iconSrc: '/images/icons/cooking.png',
		className: 'bg-[#df8e1d]/5 text-[#df8e1d]'
	},
	{
		id: 'baking',
		label: 'Baking',
		iconSrc: '/images/icons/baking.png',
		className: 'bg-[#7287fd]/5 text-[#7287fd]'
	},
	{
		id: 'airsoft',
		label: 'Airsoft',
		iconSrc: '/images/icons/airsoft.png',
		className: 'bg-[#179299]/5 text-[#179299]'
	}
];

function InterestContent({ id }: { id: 'cosplay' | 'printing' | 'cooking' | 'baking' | 'airsoft' }) {
	if (id === 'cosplay') return <CosplayInterestContent />;
	if (id === 'printing') return <PrintingInterestContent />;
	if (id === 'cooking') return <CookingInterestContent />;
	if (id === 'baking') return <BakingInterestContent />;
	return <AirsoftInterestContent />;
}
	
export function Interests() {
	const [selectedInterest, setSelectedInterest] = useState<Interest['id'] | null>(null);
	const selectedInterestData = interests.find((interest) => interest.id === selectedInterest);

	return (
		<div className="relative mt-8 mb-8 sm:mb-0 min-h-44">
			<motion.div
				className="max-w-2xl flex flex-wrap gap-2"
				animate={{
					filter: selectedInterest ? 'blur(4px)' : 'blur(0px)',
					opacity: selectedInterest ? 0.45 : 1,
					y: selectedInterest ? -6 : 0
				}}
				transition={{ duration: 0.22 }}
			>
				{interests.map((interest) => (
					<motion.div
						key={interest.id}
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<InterestLabel
							label={interest.label}
							iconSrc={interest.iconSrc}
							className={interest.className}
							onClick={() => setSelectedInterest(interest.id)}
						/>
					</motion.div>
				))}
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
