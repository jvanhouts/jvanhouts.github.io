import '@fontsource-variable/figtree';
import '@fontsource/koulen';
import '@fontsource/koulen/400.css';
import '@fontsource/quicksand';
import '@fontsource/quicksand/500.css';
import { Header } from './components/header';
import { Hobby } from './components/hobby';
import { Intro } from './components/intro';
import { Contact } from './components/contact';

export default function App() {
	return (
		<main className="wrapper flex min-h-screen w-full flex-col items-center bg-white">
			<Header />

			<div className="flex h-screen w-full max-w-4xl flex-col gap-20 bg-white px-8 pt-10 lg:flex-row lg:px-0">
				<section className="w-full">
					<Intro />
					<Hobby />
					<Contact />
				</section>
			</div>
		</main>
	);
}
