import { cva as baseCva, cx as baseCx, type CxOptions } from 'class-variance-authority';
import { twMerge } from './tw-merge.config';

type VariantClassFn<TProps = Record<string, unknown>> = (props?: TProps) => string;

const cx = (...inputs: CxOptions) => twMerge(baseCx(...inputs));

const cva: typeof baseCva = (base, config) => {
	const build = baseCva(base, config);

	return (props) => cx(build(props));
};

const compose = <T extends VariantClassFn[]>(...components: T) => {
	return (props?: Record<string, unknown>) => cx(...components.map((component) => component(props)));
};

export { compose, cva, cx as cn };

export type { CxOptions, VariantProps } from 'class-variance-authority';
