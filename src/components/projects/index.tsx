import { ListItem } from './list-item';

export function Projects() {
	return (
		<section className="mt-8 max-w-lg w-fit">
			<h2 className="font-semibold text-primary/50">working on:</h2>
			<ul className="mt-1 list-inside list-disc">
				<ListItem
					href="https://github.com/jvanhouts/e-reading-app"
					label="applying local LLM's in my development workflow"
					accentColor="rosewater"
				/>
				<ListItem
					href="https://github.com/jvanhouts/e-reading-app"
					label="custom e-reading app"
					accentColor="yellow"
				/>
				<ListItem
					href="https://github.com/jvanhouts/e-reading-app"
					label="c++ game engine"
					accentColor="teal"
				/>
				<ListItem
					href="https://github.com/jvanhouts/e-reading-app"
					label="a huge 3d-printed cosplay sword"
					accentColor="lavender"
				/>
			</ul>
		</section>
	);
}
