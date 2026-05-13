import { LucideChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/cva.config';

export function InterestLabel({
	label,
	iconSrc,
	...props
}: {
	label: string;
	iconSrc: string;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<motion.button
			type="button"
			onClick={props.onClick}
			whileHover={{ y: -1, scale: 1.05 }}
			transition={{ duration: 0.05, ease: 'easeOut' }}
			className={cn(
				'my-1 inline-flex items-center gap-4 rounded-full px-2 sm:px-4 py-1.5 sm:py-2.5 font-semibold shadow-sm translate-colors duration-200 hover:cursor-pointer hover:bg-pink-50 hover:text-accent',
				props.className
			)}
		>
			<img src={iconSrc} alt="" className="h-8 p-1 bg-white/30 rounded-xl" aria-hidden="true" />
			<span className="text-sm sm:text-base">{label}</span>
			<LucideChevronDown className="mt-1 h-4 w-4" aria-hidden="true" />
		</motion.button>
	);
}
