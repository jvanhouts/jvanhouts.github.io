import { ListItem } from './list-item';

export function Projects() {
	return (
		<section className="mt-8 max-w-lg w-fit sm:ml-8">
			<h2 className="font-semibold text-primary/50 text-lg">working on:</h2>
			<ul className="mt-1 list-inside list-disc">
				<ListItem
					href="https://github.com/jvanhouts"
					label="applying local LLMs in my development workflow"
					accentColor="rosewater"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="custom e-reading app"
					accentColor="yellow"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="c++ game engine"
					accentColor="teal"
				/>
				<ListItem
					href="https://github.com/jvanhouts"
					label="a huge 3d-printed cosplay sword"
					accentColor="lavender"
				/>
			</ul>
		</section>
	);
}
