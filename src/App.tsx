import '@fontsource-variable/figtree';
import '@fontsource/koulen';
import '@fontsource/koulen/400.css';
import '@fontsource/quicksand';
import '@fontsource/quicksand/500.css';
import { Header } from './components/header';
import { Intro } from './components/intro';
import { Contact } from './components/contact';
import { Interests } from './components/interests/interests';
import { Currently } from './components/currently';

export default function App() {
	return (
		<main className="wrapper flex min-h-screen w-full flex-col items-center bg-[radial-gradient(circle_at_top_left,rgba(255,192,203,0.08),transparent_40%)]">
			<Header />

			<div className="flex h-screen w-full max-w-4xl flex-col gap-20 px-8 pt-10 lg:flex-row lg:px-0">
				<section className="w-full">
					<Intro />
					<Interests />
					{/* <Currently /> */}
					<Contact />
				</section>
			</div>
		</main>
	);
}
