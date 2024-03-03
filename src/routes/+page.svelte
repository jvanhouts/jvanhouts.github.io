<script lang="ts">
	import { ArrowRight, Globe, ClipboardList } from 'lucide-svelte';
	import SlimeShooterImage from '$lib/assets/slime_shooter.png';
	import LizardLauncherImage from '$lib/assets/lizard_launcher.png';

	const redirect = (url: string) => window.open(url, '_blank');
</script>

<div class="w-full py-8 flex items-center justify-center">
	<div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">
		<div class="flex flex-col justify-center items-center mt-16">
			<div class="flex flex-col justify-center items-center">
				<img
					src="https://avatars.githubusercontent.com/u/34831190?v=3"
					class="w-1/4 lg:w-3/12 rounded-full"
					alt="Me"
				/>
				<h4 class="quote mt-4">hi, I'm Jess</h4>
				<p class="text-2xl">I love programming and I also really like UI & UX design.</p>
			</div>
		</div>
	</div>
</div>

<div class="w-full px-0 pt-0 lg:pb-8 pb-8 flex items-center justify-center">
	<div class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl">
		<div class="mt-16 mb-8 pt-4 border-top-solid border-secondary lg:flex lg:justify-between">
			<h2 class="text-4xl mb-3 lg:mb-0 uppercase koulen font-bold text-secondary">
				Recent Projects
			</h2>
			<a
				class="rounded-md px-4 py-1.5 font-bold koulen tracking-wide text-xl border-2 border-secondary uppercase bg-accent text-white shadow"
				href="https://github.com/gunwunbun"
				target="_blank"
				rel="noreferrer">View more on GitHub<ArrowRight class="ml-2 mb-1 inline" /></a
			>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-fit text-secondary">
			<div
				class="card shadow rounded-md"
				on:click={(x) => redirect('https://simmer.io/@gunwunbun/slimeshooter')}
			>
				<div class="relative">
					<img
						src={SlimeShooterImage}
						alt="Slime Shooter cover art"
						class="lg:h-64 2xl:h-72 3xl:h-80 opacity-85 w-full rounded-t-md"
					/>
					<div
						class="absolute bottom-0 text-white bg-[#A63838] p-2 w-1/2 text-center font-bold text-3xl uppercase koulen border-2 border-secondary rounded-tr-md"
					>
						Slime Shooter
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">
						Top-Down Shooter game made with Unity, built for WebGL.
					</p>

					<a
						class="underline text-[#A63838] font-bold text-2xl"
						href="https://simmer.io/@gunwunbun/slimeshooter">Play the Game</a
					>
				</div>
			</div>
			<div
				class="card shadow rounded-md"
				on:click={(x) => redirect('https://github.com/hollow-em/lizardLauncher')}
			>
				<div class="relative">
					<img
						src={LizardLauncherImage}
						alt="Lizard Launcher cover art"
						class="lg:h-64 2xl:h-72 3xl:h-80 opacity-85 w-full rounded-t-md"
					/>
					<div
						class="absolute bottom-0 text-white bg-[#6900BB] p-2 w-1/2 text-center font-bold text-3xl uppercase koulen border-2 border-secondary rounded-tr-md"
					>
						Lizard Launcher
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">
						[CLOSED ALPHA] Cataclysm: Dark Days Ahead launcher app built with Rust and SvelteKit.
					</p>

					<a
						class="underline text-[#6900BB] font-bold text-2xl"
						href="https://github.com/hollow-em/lizardLauncher">Check out the GitHub</a
					>
				</div>
			</div>
		</div>

		<div class="mt-32 mb-8 text-8xl font-bold koulen uppercase text-center text-secondary">
			Working experience
		</div>

		<div
			class="w-11/12 xl:w-full 3xl:w-1/2 max-w-screen-xl bg-white border-4 border-secondary p-8 lg:p-16 m-auto -mt-16 rounded-md shadow text-secondary"
		>
			<h1 class="text-5xl uppercase koulen mt-8">Steel Vintage Bikes GmbH</h1>
			<div class="lg:ml-4">
				<p class="text-2xl mt-2">Full-stack web development.</p>
				<p class="text-2xl">Building and maintaining e-commerce store.</p>

				<div class="uppercase font-bold mt-8 text-xl w-full">
					<span class="text-accent inline-block w-full xl:w-1/4">Feb 2020 - Jan 2024</span>
					<span>Remote job</span>
				</div>
				<div class="uppercase font-bold mt-2 text-xl w-full">
					<span class="text-accent inline-block w-full xl:w-1/4 mt-4 lg:mt-0"
						>Sep 2019 - Feb 2020</span
					>
					<span>Internship abroad in Berlin</span>
				</div>
			</div>

			<h1 class="text-5xl uppercase koulen mt-16 text-shadow">React Online</h1>
			<div class="lg:ml-4">
				<p class="text-2xl mt-2">
					Built the proof of concept of a digital library based on Drupal, applying Optical
					Character Recognition (OCR) on old newspapers and documents and exploring the Apache Solr
					search platform.
				</p>

				<div class="uppercase font-bold mt-8 text-xl w-full">
					<span class="text-accent inline-block w-full xl:w-1/4 mt-4 lg:mt-0"
						>Feb 2021 - Aug 2021</span
					>
					<span>Internship</span>
				</div>
			</div>
		</div>
	</div>
</div>
