import { AirsoftInterestContent } from './content/airsoft';
import { BakingInterestContent } from './content/baking';
import { CookingInterestContent } from './content/cooking';
import { CosplayInterestContent } from './content/cosplay';
import { PrintingInterestContent } from './content/printing';

export type Interest = {
	id: 'cosplay' | 'printing' | 'cooking' | 'baking' | 'airsoft';
	label: string;
	iconSrc: string;
	className: string;
};

export const interests: Interest[] = [
	{
		id: 'cosplay',
		label: 'Cosplay',
		iconSrc: '/images/icons/cosplay.webp',
		className: 'bg-rosewater/5 text-rosewater'
	},
	{
		id: 'printing',
		label: '3D printing',
		iconSrc: '/images/icons/printing.webp',
		className: 'bg-mauve/5 text-mauve'
	},
	{
		id: 'cooking',
		label: 'Cooking',
		iconSrc: '/images/icons/cooking.webp',
		className: 'bg-yellow/5 text-yellow'
	},
	{
		id: 'baking',
		label: 'Baking',
		iconSrc: '/images/icons/baking.webp',
		className: 'bg-lavender/5 text-lavender'
	},
	{
		id: 'airsoft',
		label: 'Airsoft',
		iconSrc: '/images/icons/airsoft.webp',
		className: 'bg-teal/5 text-teal'
	}
];

export function InterestContent({ id }: { id: Interest['id'] }) {
	if (id === 'cosplay') return <CosplayInterestContent />;
	if (id === 'printing') return <PrintingInterestContent />;
	if (id === 'cooking') return <CookingInterestContent />;
	if (id === 'baking') return <BakingInterestContent />;
	return <AirsoftInterestContent />;
}
