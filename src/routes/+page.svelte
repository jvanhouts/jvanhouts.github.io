<script lang="ts">
	import { ArrowRight, Globe, ClipboardList } from 'lucide-svelte';
	import SlimeShooterImage from '$lib/assets/slime_shooter.png';
	import LizardLauncherImage from '$lib/assets/lizard_launcher.png';
	import EchoDiaryImage from '$lib/assets/echo_diary.png';

	const redirect = (url: string) => window.open(url, '_blank');
</script>

<section class="w-full py-8 flex items-center justify-center">
	<div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">
		<div class="flex flex-col justify-center items-center mt-16">
			<div class="flex flex-col justify-center items-center">
				<img
					src="https://avatars.githubusercontent.com/u/34831190?v=3"
					class="w-1/4 lg:w-3/12 rounded-full"
					alt="Me"
				/>
				<h4 class="quote mt-4">hi, I'm Jess</h4>
				<p class="text-2xl">I like programming and design.</p>
			</div>
		</div>
	</div>
</section>

<div class="w-full px-0 pt-0 lg:pb-8 pb-8 flex flex-col items-center justify-center">
	<div class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl">
		<div class="mt-16 mb-8 pt-4 border-top-solid border-secondary lg:flex lg:justify-between">
			<h2 class="text-4xl mb-3 lg:mb-0 uppercase koulen font-bold text-secondary">
				Recent Projects
			</h2>
			<a
				class="btn bg-[#c3b1e1] text-black text-xl"
				href="https://github.com/gunwunbun"
				target="_blank"
				rel="noreferrer"
				>View more on GitHub<ArrowRight class="ml-2 mb-1 inline" />
			</a>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-fit text-secondary">
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
						class="absolute bottom-0 text-white bg-[#A63838] tracking-wide p-2 w-1/2 text-center font-bold text-3xl uppercase koulen border-2 border-secondary rounded-tr-md"
					>
						Slime Shooter
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">Top-Down Shooter game made with Unity.</p>

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
						class="absolute bottom-0 text-white bg-accent tracking-wide p-2 w-1/2 text-center font-bold text-3xl uppercase koulen border-2 border-secondary rounded-tr-md"
					>
						Lizard Launcher
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">
						[CLOSED ALPHA] Cataclysm: Dark Days Ahead launcher desktop app built with Rust and
						Svelte.
					</p>

					<a
						class="underline text-accent font-bold text-2xl"
						href="https://github.com/hollow-em/lizardLauncher">Check out the GitHub</a
					>
				</div>
			</div>
		</section>
	</div>

	<div class="w-full flex justify-center items-center bg-white mt-16 py-16">
		<section class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl grid md:grid-cols-2">
			<img
				src={EchoDiaryImage}
				alt="EchoDiary cover art"
				class="w-1/2 md:w-10/12 order-2 md:order-1 mt-8 md:mt-0 m-auto md:m-0"
			/>
			<div class="flex flex-col justify-start order-1 md:order-2">
				<div class="flex flex-col mt-24">
					<span class="koulen uppercase text-[#939393] text-4xl">iOS app</span>
					<span class="koulen uppercase text-6xl mt-1">EchoDiary</span>
					<p class="text-3xl mt-6">
						An iOS app allowing you to keep a diary based on your favorite songs
					</p>
					<a
						class="btn bg-[#c3b1e1] text-black shadow mt-8 text-2xl"
						href="https://github.com/school-projects-gwb/EchoDiary/"
						target="_blank"
						rel="noreferrer"
						>Check out the GitHub<ArrowRight class="ml-2 mb-1 inline" />
					</a>
				</div>
			</div>
		</section>
	</div>

	<div class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl">
		<div
			class="mt-24 mb-8 text-6xl md:text-7xl lg:text-8xl font-bold koulen uppercase text-center text-secondary"
		>
			Working experience
		</div>

		<section
			class="w-11/12 xl:w-full 3xl:w-1/2 max-w-screen-xl bg-white border-4 border-secondary p-8 lg:p-16 m-auto -mt-16 rounded-md shadow text-secondary"
		>
			<h1 class="text-4xl md:text-5xl uppercase koulen mt-8">Steel Vintage Bikes GmbH</h1>
			<div class="lg:ml-4">
				<p class="text-2xl mt-2">Full-stack web development.</p>
				<p class="text-2xl mt-2">Built and maintained Magento 2 e-commerce store.</p>

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

			<h1 class="text-4xl md:text-5xl uppercase koulen mt-16 text-shadow">React Online</h1>
			<div class="lg:ml-4">
				<p class="text-2xl mt-2">
					Built the MVP for a digital library (Drupal) preserving old newspapers and documents
				</p>

				<div class="uppercase font-bold mt-8 text-xl w-full">
					<span class="text-accent inline-block w-full xl:w-1/4 mt-4 lg:mt-0"
						>Feb 2021 - Aug 2021</span
					>
					<span>Internship</span>
				</div>
			</div>
		</section>
	</div>
</div>
