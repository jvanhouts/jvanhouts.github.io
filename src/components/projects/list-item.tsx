import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cva.config';

export function ListItem({
	href,
	label,
	accentColor,
}: {
	href: string;
	label: string;
	accentColor: string;
}) {
	return (
		<li
			className={cn(
				'group flex cursor-pointer border-b py-3 transition-all duration-200 pr-6',
				`hover:bg-${accentColor}/10`
			)}
		>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					'inline-flex flex-1 items-center gap-2 border-l-2 pl-2 font-medium text-primary/80',
					`border-${accentColor}`
				)}
			>
				{label}
				<ChevronRight
					className={cn(
						'ml-4 h-4 w-4 transition-all duration-200 group-hover:translate-x-2',
						`text-${accentColor}`
					)}
				/>
			</a>
		</li>
	);
}
