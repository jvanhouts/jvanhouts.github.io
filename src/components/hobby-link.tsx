import { LucideChevronDown } from "lucide-react";
import { cn } from "../lib/cva.config";

export function HobbyLabel({
	hobby,
	emoji,
	...props
}: {
	hobby: string,
	emoji: string,
	className?: string,
	onClick?: () => void
}) {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className={cn(`inline-flex items-center gap-4 my-1 rounded-full px-4 py-2.5 font-semibold shadow-sm hover:cursor-pointer hover:text-accent hover:bg-pink-50 translate-colors duration-200`, props.className)}
		>
			<span aria-hidden="true" className="leading-none">{emoji}</span>
			<span>{hobby}</span>
			<LucideChevronDown className="h-4 w-4 mt-1" aria-hidden="true" />
		</button>
	);
}
