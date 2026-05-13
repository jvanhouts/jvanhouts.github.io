import { extendTailwindMerge } from 'tailwind-merge';

export const twMerge = extendTailwindMerge({
	extend: {
		theme: {
			color: ['primary', 'accent', 'background']
		}
	}
});
