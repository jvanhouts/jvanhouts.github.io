import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cva.config';

export function ListItem({
	href,
	label,
	hoverBackgroundColor,
	labelChevronColor,
	labelBorderColor
}: {
	href: string;
	label: string;
	hoverBackgroundColor: string;
	labelChevronColor: string;
	labelBorderColor: string;
}) {
	return (
		<li
			className={cn(
				'group flex cursor-pointer border-b py-2 transition-all duration-200 pr-6 border rounded-xl my-2 relative',
				hoverBackgroundColor,
			)}
		>
			<span className={cn(labelBorderColor, 'absolute left-0 top-0 h-full w-1.5 rounded-l-xl')}></span>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					'inline-flex justify-between flex-1 items-center gap-2 pl-8 font-semibold text-primary/80'
				)}
			>
				{label}
				<ChevronRight
					className={cn(
						'ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-2',
						labelChevronColor
					)}
				/>
			</a>
		</li>
	);
}
