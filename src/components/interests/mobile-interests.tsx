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

export function MobileInterests() {
	const [selectedInterest, setSelectedInterest] = useState<Interest['id'] | null>(null);
	const selectedInterestData = interests.find((interest) => interest.id === selectedInterest);

	return (
		<div className="mt-8 mb-8 sm:mb-0 md:hidden">
			<InterestPills onSelect={setSelectedInterest} />
			<Drawer
				open={Boolean(selectedInterestData)}
				onOpenChange={(open) => !open && setSelectedInterest(null)}
			>
				<DrawerContent>
					{selectedInterestData ? (
						<>
							<DrawerHeader>
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
