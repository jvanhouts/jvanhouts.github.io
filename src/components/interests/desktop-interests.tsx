import { useState } from 'react';
import { LucideX } from 'lucide-react';
import { motion } from 'motion/react';
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

export function DesktopInterests() {
	const [selectedInterest, setSelectedInterest] = useState<Interest['id'] | null>(null);
	const selectedInterestData = interests.find((interest) => interest.id === selectedInterest);

	return (
		<div className="relative mb-8 hidden sm:block">
			<div className="absolute w-4 h-[30rem] rounded-tl-3xl -top-[1.8rem] flex items-end justify-end border-t-[0.2rem] border-l-[0.2rem] border-dashed border-rosewater/20">
				<span className="block absolute -right-3 -top-[0.50rem] w-3 h-3 bg-rosewater rounded-full"></span>
				<span className="block absolute -left-2 top-[10.35rem] w-3 h-3 bg-teal rounded-full"></span>
			</div>

			<InterestPills onSelect={setSelectedInterest} />
			<Drawer
				open={Boolean(selectedInterestData)}
				onOpenChange={(open) => !open && setSelectedInterest(null)}
			>
				<DrawerContent className="top-24 bottom-auto mx-auto max-h-[75svh] w-[min(48rem,calc(100vw-3rem))] rounded-2xl border border-accent/10 bg-background/95 p-0 pt-2 shadow-xl backdrop-blur">
					{selectedInterestData ? (
						<>
							<DrawerHeader className="pb-2">
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
