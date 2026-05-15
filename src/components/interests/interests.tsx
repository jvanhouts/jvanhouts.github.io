import { useState } from 'react';
import { LucideX } from 'lucide-react';
import { cn } from '../../lib/cva.config';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle
} from '../ui/drawer';
import { InterestContent, interests, type Interest } from './interest-data';
import { InterestPills } from './interest-pills';

export function Interests() {
	const [selectedInterest, setSelectedInterest] = useState<Interest['id'] | null>(null);
	const selectedInterestData = interests.find((interest) => interest.id === selectedInterest);

	return (
		<div className="relative mt-4 mb-8 sm:mt-0">
			<div className="absolute -top-[1.8rem] hidden h-[30rem] w-4 items-end justify-end rounded-tl-3xl border-l-[0.2rem] border-t-[0.2rem] border-dashed border-rosewater/20 sm:flex">
				<span className="absolute -right-3 -top-[0.50rem] block h-3 w-3 rounded-full bg-rosewater"></span>
				<span className="absolute -left-2 top-[10.35rem] block h-3 w-3 rounded-full bg-teal"></span>
			</div>

			<div
				className={cn(
					'transition-[filter,opacity,transform] duration-200 ease-out',
					selectedInterest && 'sm:-translate-y-1.5 sm:opacity-45 sm:blur-[4px]'
				)}
			>
				<InterestPills onSelect={setSelectedInterest} />
			</div>

			<Drawer
				open={Boolean(selectedInterestData)}
				onOpenChange={(open) => !open && setSelectedInterest(null)}
			>
				<DrawerContent className="sm:bottom-auto sm:left-0 sm:right-0 sm:top-28 sm:mx-auto sm:mt-0 sm:max-h-[calc(100svh-14rem)] sm:w-[min(44rem,calc(100vw-6rem))] sm:rounded-2xl sm:border-accent/10 sm:bg-background/95 sm:p-0 sm:pt-2 sm:shadow-xl sm:backdrop-blur">
					{selectedInterestData ? (
						<>
							<DrawerHeader className="sm:pb-2">
								<div className="flex items-center justify-between gap-4">
									<DrawerTitle
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
									</DrawerTitle>
									<DrawerClose asChild>
										<button
											type="button"
											className="flex items-center text-sm font-semibold text-accent/70 hover:text-accent"
										>
											<LucideX className="h-6 w-6" aria-hidden="true" />
										</button>
									</DrawerClose>
								</div>
								<DrawerDescription className="sr-only">
									Details about {selectedInterestData.label}
								</DrawerDescription>
							</DrawerHeader>
							<div className="overflow-y-auto px-4 pb-6">
								<InterestContent id={selectedInterestData.id} />
							</div>
						</>
					) : null}
				</DrawerContent>
			</Drawer>
		</div>
	);
}
