import { motion } from 'motion/react';
import { InterestLabel } from './interest-label';
import { interests, type Interest } from './interest-data';

export function InterestPills({ onSelect }: { onSelect: (interest: Interest['id']) => void }) {
	return (
		<motion.div className="max-w-2xl flex flex-wrap gap-2 sm:ml-8">
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
						onClick={() => onSelect(interest.id)}
					/>
				</motion.div>
			))}
		</motion.div>
	);
}
