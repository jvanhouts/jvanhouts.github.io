import { ListItem } from './list-item';

export function Projects() {
	return (
		<section className="mt-4 max-w-lg sm:ml-12">
			<h2 className="font-medium text-lg text-accent/70 tracking-tighter">current projects</h2>
			<ul className="mt-2 list-inside list-disc">
				<ListItem
					href="https://github.com/jvanhouts"
					label="applying local LLMs in my development workflow"
					hoverBackgroundColor="hover:bg-rosewater/10"
					labelChevronColor="text-rosewater"
					labelBorderColor="bg-rosewater"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="custom e-reading app"
					hoverBackgroundColor="hover:bg-yellow/10"
					labelChevronColor="text-yellow"
					labelBorderColor="bg-yellow"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="c++ game engine"
					hoverBackgroundColor="hover:bg-teal/10"
					labelChevronColor="text-teal"
					labelBorderColor="bg-teal"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="a huge 3d-printed cosplay sword"
					hoverBackgroundColor="hover:bg-lavender/10"
					labelChevronColor="text-lavender"
					labelBorderColor="bg-lavender"
				/>
			</ul>
		</section>
	);
}
