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
		label: 'cosplay',
		iconSrc: '/images/icons/cosplay.webp',
		className: 'bg-rosewater/5 text-rosewater border border-rosewater/5'
	},
	{
		id: 'printing',
		label: '3d printing',
		iconSrc: '/images/icons/printing.webp',
		className: 'bg-mauve/5 text-mauve border border-mauve/5'
	},
	{
		id: 'cooking',
		label: 'cooking',
		iconSrc: '/images/icons/cooking.webp',
		className: 'bg-yellow/5 text-yellow border border-yellow/5'
	},
	{
		id: 'baking',
		label: 'baking',
		iconSrc: '/images/icons/baking.webp',
		className: 'bg-lavender/5 text-lavender border border-lavender/5'
	},
	{
		id: 'airsoft',
		label: 'airsoft',
		iconSrc: '/images/icons/airsoft.webp',
		className: 'bg-teal/5 text-teal border border-teal/5'
	}
];

export function InterestContent({ id }: { id: Interest['id'] }) {
	if (id === 'cosplay') return <CosplayInterestContent />;
	if (id === 'printing') return <PrintingInterestContent />;
	if (id === 'cooking') return <CookingInterestContent />;
	if (id === 'baking') return <BakingInterestContent />;
	return <AirsoftInterestContent />;
}
