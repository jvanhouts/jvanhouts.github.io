import { InterestContentGallery } from "./gallery";

export function CosplayInterestContent() {
	return (
		<div>
		<p className="mt-4 text-sm leading-6 text-accent/80 mb-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
			elementum tristique.
		</p>
		<InterestContentGallery imageFileNames={['enderman.webp', 'enderman2.webp']} />
		</div>
	);
}